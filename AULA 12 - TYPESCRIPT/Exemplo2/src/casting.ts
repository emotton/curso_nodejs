let texto:any = "123";
let recebeNumero: number = (texto as number);
console.log(recebeNumero);

recebeNumero = (<number> texto);
console.log(recebeNumero);