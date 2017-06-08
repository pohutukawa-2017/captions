const jwt = require('jsonwebtoken')
const environment = process.env.NODE_ENV || 'development'
const config = require('../../knexfile')[environment]
const connection = require('knex')(config)

const db = require('../db')
const crypto = require('./crypto')

function issueJwt (user, res) {
  const token = createToken(user, process.env.JWT_SECRET || 'this is our awesome secret')
  res.json({
    message: 'Authentication successful.',
    token
  })
}

function createToken (user, secret) {
  return jwt.sign({
    id: user.id,
    username: user.username,
    profilePic: user.profile_pic
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
        return res.json({
          message: 'Authentication failed',
          info: 'Unrecognised user.'
        })
      }

      const user = users[0]
      if (!crypto.verifyUser(user, password)) {
        return res.json({
          message: 'Authentication failed',
          info: 'Incorrect password.'
        })
      }
      callback(user, res)
    })
  .catch(() => {
    return res.json({
      message: 'Authentication failed due to a server error.',
      info: 'Unable to retrieve user from database'
    })
  })
}

function register (req, res, callback) {
  const user = {username: req.body.username, password: req.body.password, profile_pic: req.body.profilePic}
  if (user.password.length < 8) {
    return res.json({
      message: 'Registration failed',
      info: 'Password cannot be less than eight characters.'
    })
  }
  db.getUserByName(user.username, connection)
    .then(users => {
      if (users.length !== 0) {
        return res.json({
          message: 'Registration failed',
          info: 'User already exists.'
        })
      }

      db.addUser(user, connection)
        .then(() => callback(user, res))
    })
    .catch(() => {
      return res.json({
        message: 'Authentication failed due to a server error.',
        info: 'Unable to save user into database'
      })
    })
}

module.exports = {
  verify,
  issueJwt,
  register
}
