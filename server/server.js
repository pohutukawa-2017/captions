var path = require('path')
var express = require('express')
const passport = require('passport')
const LocalStrategy = require('passport-local')
var server = express()

const auth = require('./auth')
const routes = require('./routes')

server.use(express.static(path.join(__dirname, '../public')))
server.use(passport.initialize())

server.use('/api/v1', routes)

passport.use(new LocalStrategy(auth.verify))

module.exports = function (db) {
  server.set('db', db)
  return server
}
