const express = require('express')
const exphbs = require('express-handlebars')

const app = express()

const hbs = exphbs.create({
  partialsDir: ["views/partials"]
})

app.engine('handlebars', hbs.engine)
app.set('view engine', 'handlebars')
app.use(express.static('public'))

app.get('/', (req, res) => {
  res.send('Hello World')
})

app.get('/produtos', (req, res) => {
  const products = [
    {
      name: "Garrafa",
      color: "blue",
      price: 12.6
    },
    {
      name: "Caneta",
      color: "vermelha",
      price: 1.6
    },
    {
      name: "Carregador",
      color: "branco",
      price: 49.99
    }
  ]

  res.render('produtos', { products })
})

app.listen(3000, () => {
  console.log('App está funcionando!')
})