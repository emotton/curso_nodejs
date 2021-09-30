const client = require('./../connections/connection')

module.exports = {
    getClientes: () => {
        return new Promise((resolve, reject) =>{
            client.query("select * from clientes").then( clientes => {
                resolve(clientes.rows)
            }).catch( err => reject(err.stack))
        })
    }
}
