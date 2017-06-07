const express = require('express')
const router = express.Router()
const bodyParser = require('body-parser')
const db = require('./db')
const environment = process.env.NODE_ENV || 'development'
const config = require('../knexfile')[environment]
const connection = require('knex')(config)

router.get('/images/:id', (req, res) =>{
  db.getImageById(Number(req.params.id), connection)
  .then(data => {
    res.json({result: data})
  })
})

router.get('/captions/:imageId', (req, res) => {
  db.getCaptionsById(Number(req.params.imageId), connection)
  .then(data => {
    console.log(data)
    res.json({result: data})
  })
})

module.exports = router
