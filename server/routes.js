const bodyParser = require('body-parser')
const express = require('express')
const router = express.Router()
router.use(bodyParser.json())

const auth = require('./auth')
const images = require('./images')

router.post('/authenticate', auth.issueJwt)

router.get('/images', images.listAll)

module.exports = router
