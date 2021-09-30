const {getClientes} = require('./clientesService')

getClientes().then( clientes => {
    console.log(clientes)
})
