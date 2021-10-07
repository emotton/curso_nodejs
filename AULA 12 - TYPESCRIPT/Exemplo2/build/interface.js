"use strict";
const todo1 = {
    title: "organize desk",
    description: "clear clutter",
};
function teste(todo) {
    console.log(todo.title);
    console.log(todo.description);
}
teste(todo1);
function printName(person) {
    console.log(person);
}
// printName({"idade", 10});
printName({ name: "Eduardo", idade: 51 });
function printName2(person) {
    console.log(person);
}
let eduardo = { nome: "Eduardo", idade: 51 };
printName2(eduardo);
let eduardoSistemas = { nome: "Eduardo", idade: 51, funcao: "Arquiteto" };
printName2(eduardoSistemas);
