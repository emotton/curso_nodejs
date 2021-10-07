"use strict";
// Matriz com número fixo de elementos
let nomeTupla;
// nomeTupla = [123, 456, 'Eduardo', 'Pereira'] // Erro
let pessoa;
pessoa = ['Eduardo', 'Fratoni', 'Motton', 51];
// Deve ser montado na ordem
console.log(pessoa);
// Acessado da mesma forma que array
console.log(pessoa[1]);
let profissional;
profissional = ['Eduardo', 'já nem sei mais', 10000];
console.log(profissional);
// No caso de tuplas mistas, o Spread Operator deve estar isolado em uma 
// das pontas.
let frutas;
frutas = ['abacaxi', 'pera', 'maça', 'melão', 200];
console.log(frutas);
function listarPessoas(nomes, idades) {
    return [...nomes, ...idades];
}
console.log(listarPessoas(['Eduardo', 'Henrique'], [51, 22]));
function criarPessoa(...nome) {
    return [...nome];
}
console.log(criarPessoa('Eduardo', 'Motton'));
console.log(criarPessoa('Eduardo', 'Fratoni', 'Motton'));
console.log(criarPessoa('Henrique', 'Fratoni', 'Motton'));
