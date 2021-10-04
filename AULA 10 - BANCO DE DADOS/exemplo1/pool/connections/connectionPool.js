const { Pool} = require('pg');
const dbConfig = require('./dbconfig.js');

// ==> Conexão com a Base de Dados:
const pool = new Pool({
  connectionString: dbConfig.url,
  max: 8,
  idleTimeoutMillis: 0
});

pool.on('connect', () => {
  console.log('Base de Dados conectado com sucesso!');
});

pool.on('error', () => {
    console.log('Erro ao conectar no banco de dados!');
});

module.exports = pool;