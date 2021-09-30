const {getClientes} = require('./services/clientesPoolService')
const {getProdutos} = require('./services/produtosPoolService')

getClientes().then((clientes)=>{
    console.log(clientes.rows)
})

getProdutos().then((produtos)=>{
    console.log(produtos.rows)
})