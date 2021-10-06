(async () => {
    const database = require('./db');
    const Cliente = require('./models/cliente');
    const Fornecedor = require('./models/fornecedor');
    const Produtos = require('./models/produto');
 
    try {
        
        await database.sync();

        /*
        await Cliente.create({
            nome: 'Akio Hayashi'
        });

        await Cliente.create({
            nome: 'Eduardo Motton'
        });

        await Cliente.create({
            nome: 'Henrique Motton'
        });

        await Cliente.create({
            nome: 'Leo Secon'
        });

        const clientes = await Cliente.findAll();
        clientes.forEach(cliente => {
            console.log(cliente.dataValues)
        });
        */

        
        await Cliente.update({ nome: "Leonardo Secon" }, {
            where: {
              id: 4
            }
          });

        /*
        await Cliente.destroy({
            where: {
                id: 8
            }
        });

        const cliente1 = await Cliente.findByPk(2);
        console.log(cliente1.dataValues)
        */
        
    } catch (error) {
        console.log(error);
    }
})();