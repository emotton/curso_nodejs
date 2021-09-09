const Pessoa = require('./Pessoa2Cls')

var p1 = new Pessoa('Eduardo', new Date(1970, 2-1, 4))
var p2 = new Pessoa('Akio', new Date(1945, 10-1, 4))

console.log(p1.calculoIdade());
console.log(p2.calculoIdade());