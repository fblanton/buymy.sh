const { Router } = require('express');

const { postSchema } = require('./schemas');

module.exports = db => {
  const router = new Router();
  const shops = db.collection('shops');

  router.post('/:shopName', (req, res, next) => {
    const { shopName } = req.params
    shops
      .find({ shopName })
      .toArray()
      .then(result => {
        if (result.length > 0) { res.json({ available: false }) }
        else { res.json({ available: true }) }
      })
      .catch(next)
  })

  router.post('/', (req, res, next) => {
    postSchema.validate(req.body, (err, value) => {
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
  })

  router.get('/', (req, res, next) => {
    shops
      .find({})
      .toArray()
      .then(result => res.json(result))
      .catch(next)
  })

  router.get('/:identifier', (req, res, next) => {
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
  })

  return router;
}
