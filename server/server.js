var path = require('path')
var express = require('express')
var server = express()

const routes = require('./routes')

server.use(express.static(path.join(__dirname, '../public')))

server.use('/api/v1', routes)

module.exports = function (db) {
  server.set('db', db)
  return server
}
