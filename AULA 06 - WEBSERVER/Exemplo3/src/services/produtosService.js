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
    },
    insertProduto: function(produto){
        global.produtos.push(produto);
    },
    updateProdutoById: function(id, produto){
        global.produtos.forEach(p => {
            if(p.id == id){
                p.nome = produto.nome;
                p.valor = produto.valor;
            }
        }); 
    },
    deleteProdutoById: function(id){
        let i = global.produtos.length -1 ;
        for(;i>=0;i--){
            if(global.produtos[i].id == id){
                global.produtos.splice(i,1);
            }
        }
    }
};