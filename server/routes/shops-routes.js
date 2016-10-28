const { Router } = require('express');

const { shopPostSchema } = require('./schemas');
const itemsRoutes = require('./items-routes');

module.exports = db => {
  const shops = db.collection('shops');

  return new Router()
    .param('shopName', attachShop)
    .use('/:shopName/items', itemsRoutes(db))
    .post('/:shopName', checkAvailability)
    .post('/', create)
    .get('/', readAll)
    .get('/:identifier', readOne)

  function create(req, res, next) {
    shopPostSchema.validate(req.body, (err, value) => {
      if (err) return next(err)
      shops
        .find({ shopName: value.shopName })
        .toArray()
        .then(result => {
          if (result.length > 0) { return next('Name Already Exists') }
          else {
            shops
              .insertOne(value)
              .then(result => res.json(result.ops[0]))
              .catch(next)
          }
        })
        .catch(next)
    })
  }

  function readAll(req, res, next) {
    shops
      .find({})
      .toArray()
      .then(result => res.json(result))
      .catch(next)
  }

  function readOne(req, res, next) {
    let { identifier } = req.params;
    let searchKey;

    if (Number(identifier)) {
      searchKey = 'shopId';
      identifier = Number(identifier)
    } else {
      searchKey = 'shopName';
    }

    shops
      .find({ [searchKey]: identifier })
      .toArray()
      .then(result => res.json(result[0]))
      .catch(next)
  }

  function checkAvailability(req, res, next) {
    const { shopName } = req.params
    shops
      .find({ shopName })
      .toArray()
      .then(result => {
        if (result.length > 0) { res.json({ available: false }) }
        else { res.json({ available: true }) }
      })
      .catch(next)
  }

  function attachShop(req, res, next, shopName) {
    req.query.shopName = shopName;
    next();
  }
}
