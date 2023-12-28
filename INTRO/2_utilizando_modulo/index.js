const fs = require('fs')  //file system


//le um arquivo, passa o nome do arquivo, coloca utf8 por conta da nossa 
//lingua portuguesa, e ai ou ele retorna o erro ou o conteúdo do arquivo
fs.readFile('arquivo.txt', 'utf8', (err, data) => {

  if(err){
    console.log(err)
  }

  console.log(data)
})

//https://github.com/matheusbattisti/curso_node