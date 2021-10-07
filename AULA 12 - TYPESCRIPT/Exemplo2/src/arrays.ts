let idiomas: Array<string> = [];

idiomas.push('Inglês');
idiomas.push('Alemão');
idiomas.push('Português');
idiomas.push('Frances');
idiomas.push('Japones');

console.log(idiomas);
console.log(idiomas.length);

// Spread Operator
let lista_numeros: Array<number> = [0,1,2,3,4,5,6];
lista_numeros = [...lista_numeros, 7,8,9,10]

console.log(lista_numeros);

function funcaoIdiomas(idiomas:string[]){
    for(let i=0; i<idiomas.length; i++){
        console.log(idiomas[i]);
    }
}

funcaoIdiomas(idiomas);