// Variaveis : demonstração de escopo de váriavel

// Uma variavel declarada com "var" é criada no chão do contexto
var a = 10;

console.log(a);

{ 
    // Uma variavel criada com "let" dentro de um bloco, 
    // só pertence ao bloco
    let x = 20;
    console.log(x);
    var y = 200;
}

console.log(a);

// Variavel criada com "const" não pode ser re-atribuida
const pi = 3.1415926532;
// pi = 32323223;

console.log(y);