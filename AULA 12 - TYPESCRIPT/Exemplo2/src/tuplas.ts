// Matriz com número fixo de elementos
let nomeTupla : ['Eduardo', 123, 'Jose', true, 'Maria'];
// nomeTupla = [123, 456, 'Eduardo', 'Pereira'] // Erro

let pessoa: [string, string, string, number];
pessoa = ['Eduardo', 'Fratoni', 'Motton', 51];
// Deve ser montado na ordem
console.log(pessoa);
// Acessado da mesma forma que array
console.log(pessoa[1]);

let profissional: [nome: string, funcao: string, salario: number];
profissional = ['Eduardo', 'já nem sei mais', 10000]
console.log(profissional);

// No caso de tuplas mistas, o Spread Operator deve estar isolado em uma 
// das pontas.
let frutas: [...string[], number];
frutas = ['abacaxi', 'pera', 'maça', 'melão', 200]
console.log(frutas);

function listarPessoas(nomes: string[], idades: number[]){
    return [...nomes, ...idades];
}

console.log(listarPessoas(['Eduardo', 'Henrique'], [51, 22]));

type Nome = 
    | [primeiroNome: string, sobrenome: String]
    | [primeiroNome: string, nomeMeio: string, sobrenome: String];

function criarPessoa(...nome:Nome){
    return [...nome];
}

console.log(criarPessoa('Eduardo', 'Motton'));
console.log(criarPessoa('Eduardo', 'Fratoni', 'Motton'))

console.log(criarPessoa('Henrique', 'Fratoni', 'Motton'))
