var datediff = require('node-datediffs');

function Pessoa(nome, data_nascto) {
    this.nome = nome;
    this.data_nascto = data_nascto;
}

Pessoa.prototype.mostrar = function Pessoa() {
    console.log(this);
};

Pessoa.prototype.calculoIdade_OLD = function Pessoa() {
    let hoje = new Date();
    var diferencaAnos = hoje.getFullYear() - this.data_nascto.getFullYear();
    if ( new Date(hoje.getFullYear(), hoje.getMonth(), hoje.getDate()) < 
         new Date(hoje.getFullYear(), this.data_nascto.getMonth(), this.data_nascto.getDate()) )
        diferencaAnos--;
    return diferencaAnos;
};

Pessoa.prototype.calculoIdade = function Pessoa() {
    return datediff(this.data_nascto, new Date());
};

module.exports = Pessoa;