const client = require('./connection')

module.exports = {
    getClientes: () => {
        return new Promise((resolve, reject) =>{
            client.query("select * from clientes").then( clientes => {
                client.end()
                resolve(clientes.rows)
            }).catch( err => reject(err.stack))
        })
    }
}
