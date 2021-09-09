const fs = require('fs')

const dados = fs.readFileSync('./arquivo1.txt', 'utf-8');
const dados2 = fs.readFileSync('./arquivo2.txt', 'utf-8');

console.log('\n************ ARQUIVO[1] ***********\n')
console.log(dados);

console.log('\n************ ARQUIVO[2] ***********\n')
console.log(dados2);

console.log('************** Ao final exibe essa linha ******************')