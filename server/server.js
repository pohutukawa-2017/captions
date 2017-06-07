var path = require('path')
var express = require('express')
var server = express()
const apiRouter = require('./api-routes')

server.use(express.static(path.join(__dirname, '../public')))

server.use('/api/v1', apiRouter)

server.get('*', function (req, res) {
  res.sendFile(path.join(__dirname, '../public/index.html'))
})

module.exports = function (db) {
  server.set('db', db)
  return server
 }
