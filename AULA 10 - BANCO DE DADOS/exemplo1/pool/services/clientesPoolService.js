var pool = require('./../connections/connectionPool');

module.exports = {
    getClientes: async function() {
        return await pool.query('select * from clientes');
    }

};