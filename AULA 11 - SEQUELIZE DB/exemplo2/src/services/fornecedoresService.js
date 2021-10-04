const Fornecedor = require('../models/fornecedor');

module.exports = {
    getFornecedores: async() => {
        let retorno = []
        const fornecedores = await Fornecedor.findAll();
        fornecedores.forEach(fornecedor => {
            retorno.push(fornecedor.dataValues)
        });
        return retorno;
    },
    getFornecedorById: async(id) => {
        const fornecedor = await Fornecedor.findByPk(id);
        return fornecedor.dataValues;
    },
    insertFornecedor: async(fornecedor) => {
        await Fornecedor.create({
            nome: fornecedor.nome
        })
    },
    updateFornecedorById: async(id, fornecedor) => {
        await Fornecedor.update({ nome: fornecedor.nome }, {
            where: {
              id: id
            }
          });        
    },
    deleteFornecedorById: async(id) => {
        await Fornecedor.destroy({
            where: {
                id: id
            }
        });
    }
};