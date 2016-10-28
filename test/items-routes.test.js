/* global context, describe, it, before, after, beforeEach */

const { expect } = require('chai')
const MongoClient = require('mongodb')
const request = require('request')

const createApp = require('../server/create-app')

const TEST_PORT = 1338
const TEST_URL = 'http://localhost:' + TEST_PORT + '/api/items'
const TEST_MONGO_URI = 'mongodb://localhost:27017/test-shops-app'

const sampleShops = require('./sample-shops')
const sampleItems = require('./sample-items')

describe('buymy.sh api/items', function() {
  let db, shops, items, server

  before(done => {
    MongoClient.connect(TEST_MONGO_URI, (err, _db) => {
      if (err) done(err)
      db = _db
      shops = db.collection('shops')
      items = db.collection('items')
      server = createApp(db)
        .listen(TEST_PORT, () => done())
    })
  })

  beforeEach(done => {
    shops.deleteMany({})
      .catch(done)
      .then(() => {
        shops.insertMany(sampleShops.preload)
        .catch(done)
        .then(() => {
          items.deleteMany({})
            .catch(done)
            .then(() => {
              items.insertMany(sampleItems.preload)
              .catch(done)
              .then(() => done())
            })
        })
      })
  })

  after(done => {
    db.close(true)
    server.close()
    done()
  })

  describe('GET', () => {
    context('', () => {
      it('returns all the items from the test db', done => {
        request.get(TEST_URL, (err, res, body) => {
          const result = JSON.parse(body)
          expect(err).to.be.null
          expect(result.length).to.equal(3)
          done()
        })
      })
    })
  })
})
