var pool = require('./connectionPool');

module.exports = {
    getProdutos: async function() {
        return await pool.query('select * from produtos');
    }

};