const express = require('express')
const jsonParser = require('body-parser').json()

const shopsRoutes = require('./routes/shops-routes')
const errorRoute = require('./routes/error-route')

module.exports = db =>
  express()
  .use(express.static('server/public/dist'))
  .use(jsonParser)
  .use('/ops', shopsRoutes(db))
  .use(errorRoute)
