const express = require('express')
const router = express.Router()
const bodyParser = require('body-parser')
import {getImagebyId} from './db'

router.get('/images/:id', (req, res) =>{
    
})

module.exports = router