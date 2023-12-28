// mais de um valor
const x = 10
const y = 'Gabi'
const z = [1, 2]

console.log(x, y, z)

// contagem de impressões
console.count(`O valor de x é: ${x}, contagem`)
console.count(`O valor de x é: ${x}, contagem`)
console.count(`O valor de x é: ${x}, contagem`)

// variavel entre string
//o valor da variavel y fica onde ta o %s
console.log("O nome é %s, ela é programadora", y)

// limpar o console
setTimeout(() => {
  console.clear()
}, 2000)