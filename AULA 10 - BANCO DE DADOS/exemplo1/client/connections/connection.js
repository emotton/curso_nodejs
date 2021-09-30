const {Client} = require('pg');
const {connectionString} = require('./dbconfig.js');

const client = new Client({connectionString})
client.connect()

module.exports = client
