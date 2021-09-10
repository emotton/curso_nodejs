const fs = require('fs')

const lerArquivo = file => new Promise((resolve, reject) =>{
    fs.readFile(file, 'utf-8', (err, data)=>{
        if(err){
            reject(err);
        }
        resolve({ data: data, status: true});
    });
});

async function init(){
    try {
        const {data:dados1} = await lerArquivo('./arquivo2.txt')
        const {data:dados2} = await lerArquivo('./arquivo1.txt')
        console.log('\n************ ARQUIVO[1] ***********\n')
        console.log(dados1);
        console.log('\n************ ARQUIVO[2] ***********\n')
        console.log(dados2);
        console.log('************** Ao final exibe essa linha ******************')
    } catch(err){
        console.log("Deu erro : ", err)
    }
}

init()
