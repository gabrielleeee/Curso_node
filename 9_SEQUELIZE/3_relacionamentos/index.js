const express = require('express')
const exphbs = require('express-handlebars')
const conn = require('./db/conn')

const User = require('./models/User')

const Address = require('./models/Address')

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

//rota para CRIAR
app.get('/users/create', (req, res) => {
  res.render('adduser')
})

app.post('/users/create', async (req, res) => {
  const name = req.body.name
  const occupation = req.body.occupation 
  let newsletter = req.body.newsletter 
  //como é checkbox(boolean) o valor vem on ou off 
  //e tem q definir com let pq iremos mudar o valor

  if(newsletter === 'on'){
    newsletter = true
  } else {
    newsletter = false
  }

  console.log(req.body)

  await User.create({name, occupation, newsletter})
  res.redirect('/')

})

//rota para ler um usuário pelo id
app.get('/users/:id', async (req, res) => {
  const id = req. params.id

  const user = await User.findOne({ raw: true, where: {id: id}} )

  res.render('userview', {user})
})

//rota para deletar
app.post('/users/delete/:id', async (req, res) => {
  const id = req.params.id

  await User.destroy({ where: { id: id }} )

  res.redirect('/')
})

//rota para atualizar 1
app.get('/users/edit/:id', async (req, res) => {
  const id = req.params.id

  try {
    const user = await User.findOne({ include: Address, where: { id: id }} )

    res.render('useredit', { user: user.get({ plain: true }) })

  } catch(error) {

    console.log(error)
  }
})

app.post('/users/update', async (req, res) => {
  const id = req.body.id
  const name = req.body.name
  const occupation = req.body.occupation
  let newsletter = req.body.newsletter

  if(newsletter === 'on'){
    newsletter = true;
  } else {
    newsletter = false
  }

  const userData = {
    id,
    name,
    occupation,
    newsletter
  }

  await User.update(userData, {where: { id: id }})

  res.redirect('/')
})

//rota para resgatar dados
app.get('/', async (req, res) => {

  const users = await User.findAll({raw: true})
  console.log(users)

  res.render('home', {users: users})

})

//rota cadastrar um endereço
app.post('/address/create', async (req, res) => {

  const UserId = req.body.UserId
  const street = req.body.street
  const number = req.body.number
  const city = req.body.city

  const address = {
    UserId,
    street,
    number,
    city
  }
  console.log(address)
  await Address.create(address)

  res.redirect(`/users/edit/${UserId}`)
})

//rota para deletar
app.post('/address/delete', async (req, res) => {

  const UserId = req.body.UserId
  const id = req.body.id

  await Address.destroy({
    where: { id: id },
  })

  res.redirect(`/users/edit/${UserId}`)
})

//funciona apenas se as tabelas estiverem criadas
conn.sync().then(() => {
  app.listen(3000)
}).catch((err) => console.log(err))