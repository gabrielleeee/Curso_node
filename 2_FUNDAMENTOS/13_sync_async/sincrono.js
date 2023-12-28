//sincrona: O código espera totalmente ser executado para prosseguir
//assincrona: O código continua progredindo em um ponto futuro obtem 
//a resposta da execução assíncrona

const fs = require('fs')

console.log('Início')

fs.writeFileSync("arquivo.txt", "oi")

console.log('fim')