const express = require('express')
const bodyParser = require('body-parser')
const verifyJWT = require('express-jwt')

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

router.get('/profile/:id', (req, res) => {
  const connection = req.app.get('db')
  const id = Number(req.params.id)
  db.getUser(id, connection)
    .then((results) => {
      const result = {
        id: results[0].userId,
        username: results[0].username,
        profilePic: results[0].profile_pic,
        images: results.map(image => {
          return {id: image.id, path: image.path}
        })
      }
      res.json(result)
    })
})

// Protect all routes beneath this point
router.use(
  verifyJWT({
    secret: process.env.JWT_SECRET
  }),
  auth.handleError
)

router.post('/captions/:imageId', (req, res) => {
  const connection = req.app.get('db')
  const caption = req.body
  caption.userId = req.user.id
  db.postNewCaption(req.body, Number(req.params.imageId), connection)
  .then((data) => {
    res.json({captionId: data[0]})
  })
})

router.post('/images', (req, res) => {
  const connection = req.app.get('db')
  const image = req.body
  image.userId = req.user.id
  db.postImage(image, connection)
  .then(data => {
    res.json({id: data})
  })
})

module.exports = router
