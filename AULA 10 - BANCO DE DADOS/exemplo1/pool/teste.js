const {getClientes} = require('./clientesPoolService')
const {getProdutos} = require('./produtosService')

getClientes().then((clientes)=>{
    console.log(clientes.rows)
})

getProdutos().then((produtos)=>{
    console.log(produtos.rows)
})