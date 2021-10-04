const Sequelize = require('sequelize');
const sequelize = new Sequelize(
    'postgres', 'postgres', 'numsey', {
        host: 'localhost',
        port: 5432,
        dialect: 'postgres'}
);

module.exports = sequelize