function multiplicar(multiplicador, ...multiplicados) {
    return multiplicados.map(function(numero) {
        return multiplicador * numero;
    });
}
const multiplicados = multiplicar(3, 1,2,3,4,5);
console.log(multiplicados); 
function filtrarPares(...numeros) {
    return numeros.filter(function(numero) {
        return numero % 2 === 0;
    });
}
const pares = filtrarPares(1,2,3,4,5,6,7,8,9,10);
console.log(pares); 