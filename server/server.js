var path = require('path')
var express = require('express')
<<<<<<< HEAD
var bodyParser = require('body-parser')

var server = express()

server.use(bodyParser.json())
server.use(express.static(path.join(__dirname, '../public')))

module.exports = server
=======
var server = express()

server.use(express.static(path.join(__dirname, '../public')))

module.exports = server
>>>>>>> ffa17e135c9c90da1fb4afe03b10ff3c1afd8bd3
