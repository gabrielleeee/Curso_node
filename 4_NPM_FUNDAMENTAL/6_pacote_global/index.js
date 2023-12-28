//usa método global
const _ = require('lodash')

//tira os itens repetidos
const arr = [1, 2, 3, 4, 5, 6, 7, 7, 7, 8]

console.log(_.sortedUniq(arr))