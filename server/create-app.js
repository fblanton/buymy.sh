const express = require('express')
const jsonParser = require('body-parser').json()

const errorRoute = require('./routes/error-route')
const items = require('./routes/items-routes')
const shops = require('./routes/shops-routes')

module.exports = db =>
  express()
    .use(express.static('server/public/dist'))
    .use(jsonParser)
    .use('/api/items', items(db))
    .use('/api/shops', shops(db))
    .use(errorRoute)
