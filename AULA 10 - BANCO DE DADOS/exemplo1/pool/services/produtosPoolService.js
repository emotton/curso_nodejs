var pool = require('./../connections/connectionPool');

module.exports = {
    getProdutos: async function() {
        return await pool.query('select * from produtos');
    }

};