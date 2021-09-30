const {getClientes} = require('./clientesPoolService')

getClientes().then((clientes)=>{
    console.log(clientes.rows)
})