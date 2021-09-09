// Funções : 

exibir();
exibir();
exibir();

// Função sem atribuição (É criada antes das demais execuções)
function exibir(){
    const s = 'Ola ';
    console.log(s);
}

// Função com atribuição (É criada na mesma ordem da execução)
var soma = function(x, y){
   return x + y;
}

console.log(soma(123, 234));