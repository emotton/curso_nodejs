const Sequelize = require('sequelize');
const database = require('../db');

const Fornecedor = database.define('fornecedores', {
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    nome: {
        type: Sequelize.STRING(30),
        allowNull: false
    }
})

module.exports = Fornecedor