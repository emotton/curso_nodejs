import Pessoa, { nomePessoa as nome, idadePessoa as idade } from "./pessoa.js";

const pessoa = new Pessoa("Eduardo", 52);

/*
console.log(pessoa.nome);
console.log(pessoa.idade);
*/

nome(pessoa);
idade(pessoa);
