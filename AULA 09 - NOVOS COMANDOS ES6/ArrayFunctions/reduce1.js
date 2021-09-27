const numeros = [1, 2, 3, 4];
const somar = (acumulado, x) => acumulado + x;
const total = numeros.reduce(somar);
console.log(total); // 10