const express = require('express')
const bodyParser = require('body-parser')
const router = express.Router()
const db = require('./db')

router.use(bodyParser.json())

router.get('/images/:id', (req, res) => {
  const connection = req.app.get('db')
  db.getImageById(Number(req.params.id), connection)
  .then(data => {
    res.json({result: data})
  })
})

router.get('/captions/:imageId', (req, res) => {
  const connection = req.app.get('db')
  db.getCaptionsById(Number(req.params.imageId), connection)
  .then(data => {
    res.json({result: data})
  })
})

router.post('/captions/:imageId', (req, res) => {
  const connection = req.app.get('db')
  db.postNewCaption(req.body.text, Number(req.params.imageId), connection)
  .then(data => {
    res.json({captionId: data[0]})
  })
})

router.delete('/captions/:id', (req, res) => {
  const connection = req.app.get('db')
  const id = Number(req.params.id)
  console.log(id)
  db.removeCaption(id, connection)
  .then(f => f)
  res.json({
    id: Number(req.params.id)
  })
})
module.exports = router
