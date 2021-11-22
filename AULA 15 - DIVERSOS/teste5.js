const obj = {
    nome: 'Eduardo',
    endereco: {
        rua: 'Jose Marques Nogueira, 421',
        cidade: 'Lourdes',
        estado: 'São Paulo'
    }
}

const obj2 = JSON.parse(JSON.stringify(obj));
obj2.nome = "Pedro";
obj2.endereco.estado = 'RJ';


console.log(obj, obj2);