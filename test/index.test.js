/* global describe, it, before, after */

const { expect } = require('chai');
const request = require('request');

const createApp = require('../create-app');

const TEST_PORT = 1338;
const TEST_URL = 'http://localhost:' + TEST_PORT;

describe('buymy.sh', function() {
  let server;

  before(done => {
    server = createApp()
      .listen(TEST_PORT, () => done());
  })

  after(done => {
    server.close()
    done()
  })

  describe('GET /', () => {
    it('recieves an index.html file from the server', done => {
      request(TEST_URL, (err) => {
        expect(!!err).to.be.false;
        done()
      })
    })
  })
})
