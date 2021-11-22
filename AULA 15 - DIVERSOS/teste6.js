const obj = {
    nome: 'Eduardo',
    endereco: {
        rua: 'Jose Marques Nogueira, 421',
        cidade: 'Lourdes',
        estado: 'São Paulo'
    }
}

// A partir do Node 17.0.1
const obj2 = structuredClone(obj);
obj2.nome = "Pedro";
obj2.endereco.estado = 'RJ';


console.log(obj, obj2);