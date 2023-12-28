const express = require('express')
const app = express()
const port = 5000
const rotas = require('./rotas')

app.use(express.static('public'))

app.use('/', rotas)

app.listen(port, (req, res) => {
  console.log(`App está rodando na porta ${port}`)
})