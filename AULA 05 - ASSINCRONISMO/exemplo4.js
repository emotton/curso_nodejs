const fs = require('fs')

const lerArquivo = file => new Promise((resolve, reject) =>{
    fs.readFile(file, 'utf-8', (err, data)=>{
        if(err){
            reject(err);
        }
        resolve(data);
    });
});


console.log('\n************ ARQUIVO[1] ***********\n')

const dados = lerArquivo('./arquivo2.txt')
console.log(dados);

console.log('\n************ ARQUIVO[2] ***********\n')
console.log(lerArquivo('./arquivo1.txt'));

console.log('************** Ao final exibe essa linha ******************')