const express = require('express')
const bodyParser = require('body-parser')

const db = require('./db')
const auth = require('./auth')

const router = express.Router()
router.use(bodyParser.json())

router.get('/images', (req, res) => {
  const connection = req.app.get('db')
  db.getImages(connection)
  .then((data) => {
    res.json({result: data})
  })
})

router.get('/images/:id', (req, res) => {
  const connection = req.app.get('db')
  db.getImageById(Number(req.params.id), connection)
  .then((data) => {
    res.json({result: data})
  })
})

router.get('/captions/:imageId', (req, res) => {
  const connection = req.app.get('db')
  db.getCaptionsById(Number(req.params.imageId), connection)
  .then((data) => {
    res.json({result: data})
  })
})

router.post('/captions/:imageId', (req, res) => {
  const connection = req.app.get('db')
  db.postNewCaption(req.body.text, Number(req.params.imageId), connection)
  .then((data) => {
    res.json({captionId: data[0]})
  })
})

router.post('/images', (req, res) => {
  const connection = req.app.get('db')
  db.postImage(req.body.path, connection)
  .then((data) => {
    res.json({id: data})
  })
})

router.delete('/captions/:id', (req, res) => {
  const connection = req.app.get('db')
  const id = Number(req.params.id)
  db.removeCaption(id, connection)
  .then(() => {
    res.json({
      id: Number(req.params.id)
    })
  })
})

router.post('/authenticate', (req, res) => {
  auth.verify(req, res, auth.issueJwt)
})

router.post('/register', (req, res) => {
  auth.register(req, res, auth.issueJwt)
})

router.get('/users/:id', (req, res) => {
  const connection = req.app.get('db')
  const id = Number(req.params.id)
  db.getUser(id, connection)
    .then((results) => {
      const result = {
        username: results[0].username,
        profilePic: results[0].profile_pic,
        images: results.map((image) => {
          return {id: image.id, path: image.path}
        })
      }
      res.json(result)
    })
})

module.exports = router
