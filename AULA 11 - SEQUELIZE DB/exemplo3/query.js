(async () => {
    const database = require('./db');
    const Cliente = require('./models/cliente');
    const Fornecedor = require('./models/fornecedor');
    const Produtos = require('./models/produto');

    const { QueryTypes } = require('sequelize');
 
    try {
        
        await database.sync();

        const clientes = await database.query('select id, nome from clientes order by nome desc',
        { type: QueryTypes.SELECT })

        console.log('\n*********** LISTA COMPLETA (RAW) ORDEM DECRESCENTE\n');
        console.log(clientes);

        const cliente2 = await database.query(' select id, nome from clientes where id = :id',
        {
            replacements: { id : 2 },
            type: QueryTypes.SELECT
        })

        console.log('\n*********** Cliente (RAW) encontrado pelo ID = 2\n')
        console.log(cliente2);

        const cliente3 = await database.query(' select id, nome from clientes where nome like :search',
        {
            replacements: { search : '%Motton' },
            type: QueryTypes.SELECT
        })     
        
        console.log('\n*********** Cliente (RAW) encontrado pelo nome like "%Motton"\n')
        console.log(cliente3);

        const eduardo = await Cliente.findByPk(2);
        console.log('*********** Cliente acoplado no model')
        console.log(eduardo);
        eduardo.nome = 'Eduardo Motton';
        await eduardo.save();

        database.close();

       
    } catch (error) {
        console.log(error);
    }
})();