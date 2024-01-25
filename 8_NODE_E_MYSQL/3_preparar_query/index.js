const express = require('express')
const exphbs = require('express-handlebars')
const pool = require('./db/conn')

const app = express()

app.use(
  express.urlencoded({
    extended: true,
  })
)

app.use(express.json())

app.engine('handlebars', exphbs.engine())
app.set('view engine', 'handlebars')

app.use(express.static('public'))

app.get('/', (req, res) => {
  res.render('home')
})

//rota de cadastrar 
app.post('/books/insertbook', (req, res) => {

  const title = req.body.title
  const pageqty = req.body.pageqty

  //SQL INJECTION PARA SEGURANÇA
  const sql = `INSERT INTO books (??, ??) VALUES (?, ?)`
  const data = ['title', 'pageqty', title, pageqty]

  pool.query(sql, data, function(err) {
    if (err){
      console.log(err)
      return
    }
    res.redirect('/books')
  })
})

//rota de get 
app.get('/books', (req, res) => {

  const query = `SELECT * FROM books`

  pool.query(query, function(err, data) {
    if (err){
      console.log(err)
      return
    }
    
    const books = data

    console.log(books)

    res.render('books', { books })
  })
})

//rota de get pelo id
app.get('/books/:id', (req, res) => {
  const id = req.params.id

  const sql = `SELECT * FROM books WHERE ?? = ?`
  const data = ['id', id]

  pool.query(sql, data, function(err, data) {
    if (err){
      console.log(err)
      return
    }
    
    const book = data[0]

    console.log(book)

    res.render('book', { book })
  })
})

//rota para editar
app.get('/books/edit/:id', (req, res) => {

  const id = req.params.id

  const sql = `SELECT * FROM books WHERE ?? = ?`
  const data = ['id', id]

  pool.query(sql, data, function(err, data) {
    if (err){
      console.log(err)
      return
    }
    
    const book = data[0]

    console.log(book)

    res.render('editbook', { book })
  })
})

//rota para atualizar
app.post('/books/updatebook', (req, res) => {

  const id = req.body.id
  const title = req.body.title
  const pageqty = req.body.pageqty 
  
  // dois para coluna e um para dado
  const sql = `UPDATE books SET ?? = ?, ?? = ? WHERE ?? = ?`
  const data = ['title', title, 'pageqty', pageqty, 'id', id ]

  pool.query(sql, data, function(err) {
    if (err){
      console.log(err)
      return
    }

    res.redirect('/books')
  })
})

//rota para excluir
app.post('/books/remove/:id', (req, res) => {

  const id = req.params.id

  const sql = `DELETE FROM books WHERE ?? = ?`
  const data = ['id', id]

  pool.query(sql, data, function(err) {
    if (err){
      console.log(err)
      return
    }

    res.redirect('/books')
  })
})

app.listen(3000)