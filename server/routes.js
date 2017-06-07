const bodyParser = require('body-parser')
const express = require('express')
const router = express.Router()
router.use(bodyParser.json())

const auth = require('./auth')

router.post('/authenticate', auth.issueJwt)

module.exports = router
