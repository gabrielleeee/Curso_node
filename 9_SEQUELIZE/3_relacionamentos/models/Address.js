const { DataTypes } = require('sequelize')

const db = require('../db/conn')

const User = require('./User')

const Address = db.define('Address', {

  street: {
    type: DataTypes.STRING,
    required: true,
  },
  number: {
    type: DataTypes.STRING,
    required: true,
  },
  city: {
    type: DataTypes.STRING,
    required: true,
  }
})


//RELACIONAMENTO
User.hasMany(Address) //usuário tem vários endereços
Address.belongsTo(User) //um endereço pertence a um usuário (pertence a)

module.exports = Address