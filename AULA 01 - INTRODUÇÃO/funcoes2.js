// Função :

// Função criada para realizar soma de 2 valores
var soma = function(x,y){
    return x + y;
}
// Função criada para multiplicar dois valores
var multiplicacao = function(x,y){
    return x * y;
}

// Função que recebe outra função e chama dentro dela
function calcular(funcao){
    console.log(funcao(10,12));
}

// Chamando a função calcula passando qual função eu quero executar
calcular(soma);
calcular(multiplicacao);
calcular(function(x,y){
    return x - y;
});