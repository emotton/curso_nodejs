const client = require('./../connections/connection')

module.exports = {
    getProdutos: () => {
        return new Promise((resolve, reject) =>{
            client.query("select * from produtos").then( produtos => {
                resolve(produtos.rows)
            }).catch( err => reject(err.stack))
        })
    }
}
