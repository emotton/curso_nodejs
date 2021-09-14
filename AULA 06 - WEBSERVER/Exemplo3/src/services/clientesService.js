module.exports = {
    getClientes: function() {
        return global.clientes
    },
    getClienteById: function(id) {
        global.clientes.forEach(c => {
            if(c.id == id){
                cliente = c
            }
        });
        return cliente
    }
};