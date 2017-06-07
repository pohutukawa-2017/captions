const jwt = require('jsonwebtoken')
const environment = process.env.NODE_ENV || 'development'
const config = require('../../knexfile')[environment]
const connection = require('knex')(config)

const db = require('../db')
const crypto = require('./crypto')

function issueJwt (user, res) {
  const token = createToken(user, process.env.JWT_SECRET || 'this is our awesome secret')
  console.log('token', token)
  res.json({
    message: 'Authentication successful.',
    token
  })
}

function createToken (user, secret) {
  return jwt.sign({
    id: user.id,
    username: user.username
  }, secret, {
    expiresIn: 60 * 60 * 24
  })
}

function verify (req, res, callback) {
  const username = req.body.username
  const password = req.body.password
  db.getUserByName(username, connection)
    .then(users => {
      if (users.length === 0) {
        return res.status(403).json({
          message: 'Authentication failed',
          info: 'Unrecognised user.'
        })
      }

      const user = users[0]
      if (!crypto.verifyUser(user, password)) {
        console.log('password was incorrect')
        return res.status(403).json({
          message: 'Authentication failed',
          info: 'Incorrect password.'
        })
      }
      callback(user, res)
    })
  .catch(err => {
    return res.status(500).json({
      message: 'Authentication failed due to a server error.',
      info: err.message
    })
  })
}

module.exports = {
  verify,
  issueJwt
}
