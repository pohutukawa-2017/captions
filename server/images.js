const db = require('./db')
const environment = process.env.NODE_ENV
const config = require('../../knexfile')[environment]
const connection = require('knex')(config)

exports.listAll = (req, res) => {
  db.getImages(connection)
  .then((results) => {
    res.json(results)
  })
}
