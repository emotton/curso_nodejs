const fs = require('fs')

fs.readFile('./arquivo1.txt', 'utf-8', (err, dados)=>{
    if(!err){
        console.log('arquivo lido', dados)
    } else {
        console.log('Ocorreu um erro na leitura do arquivo', err)
    }
});

console.log('*************** Ao final exibe essa linha ******************')