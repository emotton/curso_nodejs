const Sequelize = require('sequelize');
const database = require('../connections/db');

const Fornecedor = database.define('fornecedor', {
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    nome: {
        type: Sequelize.STRING,
        allowNull: false
    }
})

module.exports = Fornecedor