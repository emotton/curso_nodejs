const Cliente = require('../models/cliente');

module.exports = {
    getClientes: async() => {
        let retorno = []
        const clientes = await Cliente.findAll();
        clientes.forEach(cliente => {
            retorno.push(cliente.dataValues)
        });
        return retorno;
    },
    getClienteById: async(id) => {
        const cliente = await Cliente.findByPk(id);
        return cliente.dataValues;
    },
    insertCliente: async(cliente) => {
        await Cliente.create({
            nome: cliente.nome
        })
    },
    updateClienteById: async(id, cliente) => {
        await Cliente.update({ nome: cliente.nome }, {
            where: {
              id: id
            }
          });        
    },
    deleteClienteById: async(id) => {
        await Cliente.destroy({
            where: {
                id: id
            }
        });
    }
};