const express = require('express')

module.exports = () =>
  express()
  .use(express.static('./public'))
