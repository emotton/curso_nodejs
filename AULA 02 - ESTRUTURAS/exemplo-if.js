// Agtribuição de varíavel "="
var x = 10;
// Comparação "=="
if(x == 10){ 
    console.log('é dez'); 
    console.log('Boa noite');
} else 
    // sem bloco "{}" apenas a primeira 
    // linha de código é considerada
    console.log('não é dez'); 
console.log('Boa noite cinderela');

var a = 100;
var s = "100";
// Comparação ocorre mesmo com tipos de variaveis diferentes
// "===" está comparando inclusive os tipos
if( a === s){
    console.log('"a" e "s" são iguais');
} else {
    console.log('"a" e "s" são diferentes');
}

// Declarando uma variavel, sem inicializar (GLOBAL)
var d;
{
    // Verificar se a variavel não recebeu inicialização
    if(d == undefined){
        // Inicializei
        d = 100;
        console.log(d);
    } else {
        console.log('a variavel já foi inicializada');
    }
}

console.log(d);

var s1 = 'Eduardo';
var s2 = 'eduardo';
// Comparação entre strings, Upper case e Lower case são considerados
if(s1 == s2){
    console.log('s1 e s2 são iguais');
} else {
    console.log('s1 e s2 são diferentes');
}

// && = AND | != (Diferente)
if( x == 10 && a != s){
    console.log('tudo igual');
} else {
    console.log('algo não é igual');
}
// || = OR
if( x == 10 || a != s){
    console.log('um dos dois são iguais');
} else {
    console.log('todos são diferentes');
}