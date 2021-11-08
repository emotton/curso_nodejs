let obj = {nome: 'edu', idade: 51}

const { nome, idade } = obj

console.log(nome)
console.log(idade)

let array = ['edu', 'park', 'vitu', 'petu']

let [ n1, n2 ] = array

console.log(n1)
console.log(n2)

processa(123);
processa('Motton')
processa(array);
processa(...array);


function processa(param1, param2, param3, param4){
  console.log('1->'+(param1?param1:""));
  console.log('2->'+(param2?param2:""));
  console.log('3->'+(param3?param3:""));
  console.log('4->'+(param4?param4:""));
}

imprimir('edu', 51)
imprimir('edu')

function imprimir(nome, idade){
  console.log(nome?nome:'')
  console.log(idade?idade:'')
}

// Template String

var codigo = 123

var usuario = `Sou o código : ${codigo}`

console.log(usuario)