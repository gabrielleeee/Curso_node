const { Sequelize } = require('sequelize')

const sequelize = new Sequelize('nodesequelize1', 'root', '', {
  host: 'localhost',
  dialect: 'mysql'  //qual banco eu quero integrar
})

// try {
//   sequelize.authenticate()
//   console.log('Conectamos com sucesso com o Sequelize!')
// } catch (err) {
//   console.log('Não foi possível conectar: ', error)
// }

module.exports = sequelize