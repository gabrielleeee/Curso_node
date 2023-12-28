
//externo
const minimist = require('minimist')

//interno
const soma = require('./soma').soma

const args = minimist(process.argv.slice(2))

const a = parseInt(args['a']) //parseInt transforma string pra number
const b = parseInt(args['b'])

soma(a, b)

//tem que rodar node index.js --a=5 --b=9