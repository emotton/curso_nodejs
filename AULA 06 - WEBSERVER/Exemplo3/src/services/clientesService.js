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
    },
    insertCliente: function(cliente){
        global.clientes.push(cliente);
    },
    updateClienteById: function(id, cliente){
        global.clientes.forEach(c => {
            if(c.id == id){
                c.nome = cliente.nome
            }
        }); 
    },
    deleteClienteById: function(id){
        let i = global.clientes.length -1 ;
        for(;i>=0;i--){
            if(global.clientes[i].id == id){
                global.clientes.splice(i,1);
            }
        }
    }   
};