module.exports = {
    getProdutos: function() {
        return global.produtos
    },
    getProdutoById: function(id) {
        let produto;
        global.produtos.forEach(p => {
            if(p.id == id){
                produto = p
            }
        });
        return produto
    }
};