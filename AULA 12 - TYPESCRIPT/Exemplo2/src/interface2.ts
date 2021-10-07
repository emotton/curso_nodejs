interface Person {
    nome: string;
    idade: number;
    sexo?: string;
  }

interface Employee extends Person {
    funcao: string;
    salario: number;
}

let edu:Employee = {nome:"Eduardo", idade:51, funcao:"arquiteto", salario:10000, sexo:'M'};
let leo:Employee = {nome:"Leonardo", idade:40, funcao:"arquiteto", salario:10000};


function filtraPerson(...funcs:Person[]){
    for(let i=0; i<funcs.length; i++){
        console.log(funcs[i].nome, funcs[i].idade);
    }
}

filtraPerson(edu, leo);

// Usar a mesma interface, agrega fatores a já existente
// e, mesmo sendo criada abaixo de sua utilização, faz efeito direto
interface Person {
    religiao?: string;
}

let eduPadre:Person = {nome:'Eduardo', idade:51, religiao:'catolico', sexo:'M'};

interface Manager extends Employee {
    readonly bonus: number;
}

let gerente: Manager = {
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