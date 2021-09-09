const fs = require('fs')

function lerArquivo(nome){
    fs.readFile('./arquivo1.txt', 'utf-8', (err, dados)=>{
        if(!err){
            return dados
        }
    })
}

console.log('\n************ ARQUIVO[1] ***********\n')
console.log(lerArquivo('./arquivo2.txt'));

console.log('\n************ ARQUIVO[2] ***********\n')
console.log(lerArquivo('./arquivo1.txt'));

console.log('************** Ao final exibe essa linha ******************')