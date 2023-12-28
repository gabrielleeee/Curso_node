const express = require('express')
const exphbs = require('express-handlebars')

const app = express()

const hbs = exphbs.create({
  partialsDir: ["views/partials"]
})

app.engine('handlebars', hbs.engine)
app.set('view engine', 'handlebars')

app.get('/dashboard', (req, res) => {

  const items = ["Item a", "Item b", "Item c"]

  res.render('dashboard', {items})
})

app.get('/post', (req, res) => {
  const post = {
    title: 'Aprender Node.js',
    category: 'JavaScript',
    body: 'Este artigo vai te ajudar a aprender Node.js',
    comments: 4,
  }

  res.render('blogpost', {post})
})

app.get('/blog', (req, res) => {
  const posts = [
    {
      title: 'Aprender Node.js',
      category: "JavaScript",
      body: "teste",
      comments: 5
    },
    {
      title: 'Aprender C#',
      category: "C#",
      body: "teste2",
      comments: 7
    },
    {
      title: 'Aprender Python',
      category: "Python",
      body: "teste3",
      comments: 2
    }
  ]

  res.render('blog', { posts })
})

app.get('/', (req, res) => {

  const user = {
    name: "Gabrielle",
    surname: "Poletti",
    age: 20
  }

  const palavra = 'Teste'

  const auth = false

  const approved = false

  res.render('home', {user: user, palavra, auth, approved})
})

app.listen(3000, () => {
  console.log("App funcionando!")
})