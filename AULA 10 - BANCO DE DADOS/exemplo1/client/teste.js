const {getClientes} = require('./clientesService')
const {getProdutos} = require('./produtosService')

getClientes().then( clientes => {
    console.log(clientes)
})

getProdutos().then( produtos => {
    console.log(produtos)
})