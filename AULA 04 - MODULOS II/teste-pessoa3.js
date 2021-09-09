const Pessoa = require("./Pessoa3Cls");

var p1 = new Pessoa("Eduardo", new Date(1970, 2-1, 4));
p1.cor = "branca";
p1.endereco = "Rua Jose Marques Nogueira, 421";
console.log(p1);

console.log(p1.calculoIdade());
console.log(p1.isAdulto());
console.log(Pessoa.getIdadeAdulta());

var p2 = new Pessoa("Bheatriz", new Date(2006, 2-1, 22));
p2.cor = "branca";
p2.endereco = "Rua Jose Marques Nogueira, 421";
console.log(p2);

console.log(p2.calculoIdade());
console.log(p2.isAdulto());
console.log(Pessoa.getIdadeAdulta());

