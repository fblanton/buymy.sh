const { Router } = require('express')
const ObjectId = require('mongodb').ObjectID

const { itemPostSchema, itemUpdateSchema } = require('./schemas')

module.exports = db => {
  const items = db.collection('items')

  return new Router()
    .param('_id', idParamToQuery)
    .post('/', create)
    .get('/', read)
    .get('/:_id', read)
    .put('/:_id', update)
    .delete('/:_id', del)

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
    items
      .find(req.query)
      .toArray()
      .then(located =>
        (located.length) ? res.json(located) : res.sendStatus(404)
      )
      .catch(next)
  }

  function update(req, res, next) {
    itemUpdateSchema.validate(req.body, (err, value) => {
      if (err) return next(err)
      items
        .updateOne(req.query, value)
        .then(({result: { nModified: ok }}) => {
          if (!ok) return res.sendStatus(404)
          items
            .find(req.query)
            .toArray()
            .then(located => res.json(located[0]))
            .catch(next)
        })
        .catch(next)
    })
  }

  function del(req, res, next) {
    items
      .deleteOne(req.query)
      .then(result =>
        (result.deletedCount) ? res.sendStatus(204) : res.sendStatus(404)
      )
      .catch(next)
  }

  function idParamToQuery(req, res, next, _id) {
    try {
      req.query._id = ObjectId(_id)
    } catch (err) {
      req.query._id = ObjectId()
    }
    next()
  }
}
