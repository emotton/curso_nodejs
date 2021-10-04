const Produto = require('../models/produto');

module.exports = {
    getProdutos: async() => {
        let retorno = []
        const produtos = await Produto.findAll();
        produtos.forEach(produto => {
            retorno.push(produto.dataValues)
        });
        return retorno;
    },
    getProdutoById: async(id) => {
        const produto = await Produto.findByPk(id);
        return produto.dataValues;
    },
    insertProduto: async(produto) => {
        await Produto.create({
            nome: produto.nome,
            valor: produto.valor
        })
    },
    updateProdutoById: async(id, produto) => {
        await Produto.update({ 
            nome: produto.nome, valor: produto.valor }, 
            {
            where: {
              id: id
            }
          });     
    },
    deleteProdutoById: async(id) => {
        await Produto.destroy({
            where: {
                id: id
            }
        });
    }
};