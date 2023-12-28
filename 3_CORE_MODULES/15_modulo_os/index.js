const os = require('os')

console.log(os.cpus()) //quantas cps tem no servidor
console.log(os.freemem()) //quantas memorias livres tem na máquina
console.log(os.homedir()) //qual o diretório principal dessa máquina
console.log(os.type()) //qual o tipo de SO da máquina