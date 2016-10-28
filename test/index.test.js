/* global describe, it, before, after, beforeEach */

const { expect } = require('chai');
const MongoClient = require('mongodb');
const request = require('request');

const createApp = require('../server/create-app');

const TEST_PORT = 1338;
const TEST_URL = 'http://localhost:' + TEST_PORT;
const TEST_MONGO_URI = 'mongodb://localhost:27017/test-shops-app'

const sampleShops = require('./sample-shops');

describe('buymy.sh', function() {
  let db, shops, server;

  before(done => {
    MongoClient.connect(TEST_MONGO_URI, (err, _db) => {
      if (err) done(err);
      db = _db;
      shops = db.collection('shops');
      server = createApp(db)
        .listen(TEST_PORT, () => done());
    })
  })

  beforeEach(done => {
    shops.deleteMany({})
      .catch(done)
      .then(() => {
        shops.insertMany(sampleShops.preload)
        .catch(done)
        .then(() => done())
      })
  })

  after(done => {
    db.close(true);
    server.close();
    done();
  })

  describe('GET /', () => {
    it('recieves an index.html file from the server', done => {
      request(TEST_URL, (err) => {
        expect(err).to.be.null;
        done()
      })
    })
  })
})
