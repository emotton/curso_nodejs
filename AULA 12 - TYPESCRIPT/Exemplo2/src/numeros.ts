let numero: number = 1000000;
let hexadecimal: number = 0x37cf;
let octal: number = 0o377;
let binario: number = 0b110001;

// Funciona apenas com ES2020
let numeroGrande: bigint = 12345678901234567890n;

console.log(numero);
console.log(hexadecimal);
console.log(octal);
console.log(binario);
console.log(numeroGrande);

console.log(typeof(numero));
console.log(typeof(hexadecimal));
console.log(typeof(octal));
console.log(typeof(binario));
console.log(typeof(numeroGrande));