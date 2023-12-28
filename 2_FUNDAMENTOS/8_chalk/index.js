const chalk = require('chalk')

const nota = 5


if (nota >= 7) {
  console.log(chalk.green('Parabéns, você está aprovado!'))
} else {
  console.log(chalk.bgRed('Você precisa ficar de recuperação!'))
}

//chalk ajuda na vizualização do terminal, dá pra mudar as coresss