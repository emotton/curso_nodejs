interface Todo {
  title: string;
  description: string;
}

const todo1 = {
  title: "organize desk",
  description: "clear clutter",
};

function teste(todo: Todo) {
  console.log(todo.title);
  console.log(todo.description);
}

teste(todo1);

function printName(person: { name: string; idade: number }) {
  console.log(person);
}

// printName({"idade", 10});
printName({ name: "Eduardo", idade: 51 });

// logo, poderia se criar uma interface

interface Pessoa {
  nome: string;
  idade: number;
}

function printName2(person: Pessoa) {
  console.log((person as Pessoa));
}

let eduardo: Pessoa = { nome: "Eduardo", idade: 51 };

printName2(eduardo);

// No caso, se uma interface possuir mais do que o necessário, porém,
// contiver o que é exigido, não ocorre problemas.
// Entretando, se fizer uso do objeto completo, mesmo efetuando o 
// casting do mesmo, ele não reprime o conteudo excedente

interface Profissional {
  nome: string;
  funcao: string;
  idade: number;
}

let eduardoSistemas: Profissional = { nome: "Eduardo", idade: 51, funcao: "Arquiteto"};

printName2(eduardoSistemas);