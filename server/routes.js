const express = require('express')
const router = express.Router()
const bodyParser = require('body-parser')
const db = require('./db')
const environment = process.env.NODE_ENV || 'development'
const config = require('../knexfile')[environment]
const connection = require('knex')(config)

router.get('/images/:id', (req, res) =>{
  console.log("here")
  db.getImageById(Number(req.params.id), connection)
  .then(data => {
    res.json({result: data})
  })
    
})

module.exports = router