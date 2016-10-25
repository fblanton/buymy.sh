const { Router } = require('express');

const { postSchema } = require('./schemas');

module.exports = db => {
  const router = new Router();
  const shops = db.collection('shops');

  router.post('/', (req, res, next) => {
    postSchema.validate(req.body, (err, value) => {
      if (err) next(err)

      shops
        .find({ shopName: value.shopName })
        .toArray()
        .then(result => {
          if (result.length > 0) { next('Name Already Exists') }
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

  return router;
}
