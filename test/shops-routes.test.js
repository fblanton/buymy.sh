/* global context, describe, it, before, after, beforeEach */

const { expect } = require('chai');
const MongoClient = require('mongodb');
const request = require('request');

const createApp = require('../server/create-app');

const TEST_PORT = 1338;
const TEST_URL = 'http://localhost:' + TEST_PORT + '/api/shops';
const TEST_MONGO_URI = 'mongodb://localhost:27017/test-shops-app'

const sampleShops = require('./sample-shops');

describe('buymy.sh api/shops', function() {
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

  describe('POST', () => {
    context('/:existingShopName', () => {
      it('returns the store name is unavailable', done => {
        request.post(TEST_URL + '/' + sampleShops.preload[0].shopName, (err, res, body) => {
          expect(err).to.be.null
          expect(JSON.parse(body).available).to.be.false
          done()
        })
      })
    })

    context('json: { newShop }', () => {
      it('creates a shop', done => {
        request.post(TEST_URL, { json: sampleShops.create[0] }, (err, res, body) => {
          expect(err).to.be.null;
          expect(body).to.include(sampleShops.create[0]);
          done();
        })
      })
    })

    context('json: { existingShopName }', () => {
      it('fails to create a shop', done => {
        request.post(TEST_URL, { json: sampleShops.create[1] }, (err, res, body) => {
          expect(err).to.be.null;
          expect(body).to.equal('Internal Server Error');
          done();
        })
      })
    })
  })

  describe('GET', () => {
    context('', () => {
      it('returns a list of all shops', done => {
        request.get(TEST_URL, (err, res, body) => {
          const result = JSON.parse(body);
          expect(err).to.be.null;
          expect(result[0]).to.include(sampleShops.preload[0]);
          expect(result[1]).to.include(sampleShops.preload[1]);
          done()
        })
      })
    })

    context('/shopName', () => {
      it('returns a single shop by name', done => {
        const sampleShop = sampleShops.preload[0];
        const { shopName } = sampleShop;
        request.get(TEST_URL + '/' + shopName, (err, res, body) => {
          const result = JSON.parse(body);
          expect(err).to.be.null;
          expect(result).to.include(sampleShop);
          done()
        })
      })
    })

    context('GET /shopId', () => {
      it('returns a single shop by id', done => {
        const sampleShop = sampleShops.preload[0];
        const { shopId } = sampleShop;
        request.get(TEST_URL + '/' + shopId, (err, res, body) => {
          const result = JSON.parse(body);
          expect(err).to.be.null;
          expect(result).to.include(sampleShop);
          done()
        })
      })
    })
  })
})
