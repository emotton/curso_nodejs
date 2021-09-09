var datediff = require('node-datediffs');

// Classe utilizando ES6, agora implementado pelo Node nas versões mais atuais
module.exports = class Pessoa {
    //propriedades e funções da classe aqui
    constructor(nome, data_nascto) {
        this.nome = nome;
        this.data_nascto = data_nascto;
        this.dataCadastro = new Date();
    }
   
    // Propriedade Estática
    static idadeAdulta = 18;
    calculoIdade(){
        return datediff(this.data_nascto, new Date());
    }
    isAdulto(){
        return datediff(this.data_nascto, new Date()).years > Pessoa.idadeAdulta
    }
    // Método estático
    static getIdadeAdulta(){
        return Pessoa.idadeAdulta;
    }
}