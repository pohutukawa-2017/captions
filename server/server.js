var path = require('path')
var express = require('express')
var server = express()
const router = require('./routes')

server.use(express.static(path.join(__dirname, '../public')))

server.use('/', router)
module.exports = server
