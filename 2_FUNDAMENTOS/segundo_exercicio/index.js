const inquirer = require('inquirer')
const chalk = require('chalk')

inquirer.prompt([{
  name: 'pergunta1',
  message: 'Qual seu nome?'
},
{
  name: 'pergunta2',
  message: 'Qual sua idade?'
}
]).then((answers) => {

  if(!answers.pergunta1 || !answers.pergunta2) {
    throw new Error("Todos os itens são obrigatórios!")
  }

  const resposta = `O nome é ${answers.pergunta1} e a idade ${answers.pergunta2}`
  console.log(chalk.bgYellow.black(resposta))

}).catch(err => console.log(err))


