(async () => {
    const database = require('./db');
    const Cliente = require('./models/cliente');
    const Fornecedor = require('./models/fornecedor');
    const Produtos = require('./models/produto');
 
    try {
        
        await database.sync();

        /*
        const resultadoCreate = await Cliente.create({
            nome: 'Akio Hayashi'
        })
        console.log(resultadoCreate);
        */

        const clientes = await Cliente.findAll();
        clientes.forEach(cliente => {
            console.log(cliente.dataValues)
        });

        /*
        await Cliente.update({ nome: "Eduardo Fratoni Motton" }, {
            where: {
              id: 1
            }
          });

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