var pool = require('./connectionPool');

module.exports = {
    getClientes: async function() {
        return await pool.query('select * from clientes');
    }

};