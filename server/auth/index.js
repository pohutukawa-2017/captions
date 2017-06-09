const jwt = require('jsonwebtoken')
const environment = process.env.NODE_ENV || 'development'
const config = require('../../knexfile')[environment]
const connection = require('knex')(config)

const db = require('../db')
const crypto = require('./crypto')

function issueJwt (user, res) {
  const token = createToken(user, process.env.JWT_SECRET)
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

function handleError (err, req, res, next) {
  if (err) {
    return res.status(403).json({
      message: 'Access to this resource was denied.',
      info: err.message
    })
  }
  next()
}

function verify (req, res, callback) {
  const username = req.body.username
  const password = req.body.password
  db.getUserByName(username, connection)
    .then((users) => {
      if (users.length === 0) {
        return res.status(403).json({
          message: 'Authentication failed',
          info: 'Unrecognised user.'
        })
      }

      const user = users[0]
      if (!crypto.verifyUser(user, password)) {
        return res.status(403).json({
          message: 'Authentication failed',
          info: 'Incorrect password.'
        })
      }
      callback(user, res)
    })
  .catch(() => {
    return res.status(500).json({
      message: 'Authentication failed due to a server error.',
      info: 'Unable to retrieve user from database'
    })
  })
}

function register (req, res, callback) {
  if (req.body.password.length < 8) {
    return res.status(403).json({
      message: 'Registration failed',
      info: 'Password cannot be less than eight characters.'
    })
  }
  const passwordHash = crypto.getHash(req.body.password)
  const user = {
    username: req.body.username,
    password_hash: passwordHash,
    profile_pic: req.body.profilePic || '/default-profile-pic.png'
  }
  db.getUserByName(user.username, connection)
    .then((users) => {
      if (users.length !== 0) {
        return res.status(403).json({
          message: 'Registration failed',
          info: 'User already exists.'
        })
      }

      db.addUser(user, connection)
        .then((id) => {
          user.id = id[0]
          callback(user, res)
        })
    })
    .catch(() => {
      return res.status(500).json({
        message: 'Authentication failed due to a server error.',
        info: 'Unable to save user into database'
      })
    })
}

module.exports = {
  verify,
  issueJwt,
  register,
  handleError
}
