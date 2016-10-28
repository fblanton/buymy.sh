const { Router } = require('express')

const { itemPostSchema } = require('./schemas');

module.exports = db => {
  const items = db.collection('items')

  return new Router()
    .post('/', create)
    .get('/', read)
    .put('/', update)
    .delete('/', del)

  function create(req, res, next) {
    itemPostSchema.validate(req.body, (err, value) => {
      if (err) return next(err)
      items
        .insertOne(value)
        .then(result => res.json(result.ops[0]))
        .catch(next)
    })
  }

  function read(req, res, next) {
    const { shopName } = req.body
    const filter = (shopName) ? { shopName } : {}

    items
      .find(filter)
      .toArray()
      .then(located => res.json(located))
      .catch(next)
  }

  function update(req, res, next) {
    next()
  }

  function del(req, res, next) {
    next()
  }
}
