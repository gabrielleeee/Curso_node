const express = require("express")
const router = express.Router()
const path = require('path')
const basePath = path.join(__dirname, '../public/html')

router.get('/', (req, res) => {
  res.sendFile(`${basePath}/home.html`)
})

router.get('/rota1', (req, res) => {
  res.sendFile(`${basePath}/01.html`)
})

router.get('/rota2', (req, res) => {
  res.sendFile(`${basePath}/02.html`)
})

module.exports = router