export default class Pessoa {
  constructor(nome, idade) {
    this.nome = nome;
    this.idade = idade;
  }
}

export function nomePessoa(pessoa) {
  console.log(pessoa.nome);
}

export function idadePessoa(pessoa) {
  console.log(pessoa.idade);
}
