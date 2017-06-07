const bodyParser = require('body-parser')
const express = require('express')
const router = express.Router()
router.use(bodyParser.json())

const auth = require('./auth')

router.post('/authenticate', (req, res) => {
  auth.verify(req.body, res, auth.issueJwt)
})

module.exports = router
