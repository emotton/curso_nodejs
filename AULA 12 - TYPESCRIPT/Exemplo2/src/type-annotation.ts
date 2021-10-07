/* Type Annotation */

// Simples
let nome:string = "texto";
console.log(nome);
// Array
let animais: string[] = ['elefante', 'cachorro', 'gato', 'panda'];
console.log(animais);
// Objetos
let carro: {
    nome: string,
    ano: number,
    marca: string,
    modelo: string
};

carro = { nome: 'Palio', ano: 2003, marca: 'Fiat', modelo: '1.3 Fire'};

console.log(carro);

// Funções
function multiplicarNumeros(num1:number, num2:number): number {
    return num1*num2;
}

let resultado = multiplicarNumeros(123, 345);
console.log(resultado);
