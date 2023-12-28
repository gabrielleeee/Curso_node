//nome

console.log(process.argv)

const args = process.argv.slice(2)

console.log(args)

const nome = args[0].split('=')[1]

console.log(nome)

//como se fosse uma array invisivel que vc add na hora de rodar
//o programa no terminal