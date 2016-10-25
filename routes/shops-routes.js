const { Router } = require('express');

module.exports = db => {
  const router = new Router();
  const shops = db.collection('shops');

  router.post('/', (req, res, next) => {
    shops
      .insertOne(req.body)
      .then(result => res.json(result.ops[0]))
      .catch(next)
  })

  return router;
}
