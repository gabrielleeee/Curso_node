//tem que ser uma classe

const { DataTypes } = require('sequelize') //ajuda a definir os tipos de dados p/ sequelize entender

const db = require('../db/conn')

const User = db.define('User', {
  name: {
    type: DataTypes.STRING,
    allowNull: false   //false para ser NOT NULL (n pode estar nulo)
  },
  occupation: {
    type: DataTypes.STRING,
    required: true     //não pode estar vazio
  },
  newsletter: {
    type: DataTypes.BOOLEAN
  },
})

module.exports = User