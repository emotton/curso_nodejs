const fs = require('fs')

const lerArquivo = file => new Promise((resolve, reject) =>{
    fs.readFile(file, 'utf-8', (err, data)=>{
        if(err){
            reject(err);
        }
        resolve(data);
    });
});



lerArquivo('./arquivo2.txt').then((dados)=>{
    console.log('\n************ ARQUIVO[1] ***********\n')
    console.log(dados);
    lerArquivo('./arquivo2.txt').then((dados)=>{
        console.log('\n************ ARQUIVO[2] ***********\n')
        console.log(dados);
        console.log('************** Ao final exibe essa linha ******************')
    })
})

