const jwt = require('jsonwebtoken')
const passport = require('passport')
const environment = process.env.NODE_ENV || 'development'
const config = require('../../knexfile')[environment]
const connection = require('knex')(config)

const db = require('../db')
const crypto = require('./crypto')

function issueJwt (req, res, next) {
  console.log(req)
  passport.authenticate(
    'local',
    (err, user, info) => {
      if (err) {
        console.log(err)
        return res.status(500).json({
          message: 'Authentication failed due to a server error.'
        })
      }

      if (!user) {
        return res.status(403).json({
          message: 'Authentication failed.',
          info: info.message
        })
      }

      const token = createToken(user, process.env.JWT_SECRET || 'this is our awesome secret')
      res.json({
        message: 'Authentication successful.',
        token
      })
    }
  )(req, res, next)
}

function createToken (user, secret) {
  return jwt.sign({
    id: user.id,
    username: user.username
  }, secret, {
    expiresIn: 60 * 60 * 24
  })
}

function verify (username, password, done) {
  console.log('username and password', username, password)
  db.getUserByName(username, connection)
    .then(users => {
      console.log('users', users)
      if (users.length === 0) {
        return done(null, false, { message: 'Unrecognised user.' })
      }

      const user = users[0]
      if (!crypto.verifyUser(user, password)) {
        console.log('password was incorrect')
        return done(null, false, { message: 'Incorrect password.' })
      }
      console.log('got to here')
      done(null, {
        id: user.id,
        username: user.username
      })
    })
  .catch(err => {
    done(err, false, { message: "Couldn't check your credentials with the database." })
  })
}

module.exports = {
  verify,
  issueJwt
}
