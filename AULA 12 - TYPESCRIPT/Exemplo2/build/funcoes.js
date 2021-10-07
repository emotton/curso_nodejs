"use strict";
function enviarMensagem(msg) {
    console.log(msg);
}
enviarMensagem("Hello function !");
function somar(v1, v2, v3) {
    return v1 + v2 + (v3 != undefined ? v3 : 0);
}
console.log(somar(10, 20));
console.log(somar(10, 20, 30));
// Não é possivel passar o número diferente de argumentos esperado
//console.log(somar(10,20,30,40));
function mostrarQualquerCoisa(conteudo) {
    console.log(conteudo);
}
mostrarQualquerCoisa(123);
mostrarQualquerCoisa("ufa sou string");
mostrarQualquerCoisa([1, 2, 3]);
mostrarQualquerCoisa({ num1: 1, num2: 2, num3: 3 });
// Pode voltar a ser fraca tipagem, mas está se deixando claro que o risco
// passa a ser do desenvolvedor
var x = 100;
x = "teste";
console.log(typeof x);
