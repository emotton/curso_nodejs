function Pessoa(nome, data_nascto) {
    this.nome = nome;
    this.data_nascto = data_nascto;
}

Pessoa.prototype.mostrar = function Pessoa() {
    console.log(this);
};

module.exports = Pessoa;