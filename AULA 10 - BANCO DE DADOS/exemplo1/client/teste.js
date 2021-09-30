const {getClientes} = require('./services/clientesService')
const {getProdutos} = require('./services/produtosService')

getClientes().then( clientes => {
    console.log(clientes)
})

getProdutos().then( produtos => {
    console.log(produtos)
})