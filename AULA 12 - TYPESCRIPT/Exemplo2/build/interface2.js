"use strict";
let edu = { nome: "Eduardo", idade: 51, funcao: "arquiteto", salario: 10000, sexo: 'M' };
let leo = { nome: "Leonardo", idade: 40, funcao: "arquiteto", salario: 10000 };
function filtraPerson(...funcs) {
    for (let i = 0; i < funcs.length; i++) {
        console.log(funcs[i].nome, funcs[i].idade);
    }
}
filtraPerson(edu, leo);
let eduPadre = { nome: 'Eduardo', idade: 51, religiao: 'catolico', sexo: 'M' };
let gerente = {
    nome: "Chefão",
    idade: 55,
    funcao: 'Gerente Geral',
    salario: 50000,
    bonus: 1000
};
gerente.nome = 'Godofredo da Silva';
// gerente.bonus = 1000; // não é permitido alterar um atributo readonly após sua
// criação inicial
console.log(gerente);
