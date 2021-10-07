"use strict";
class Persona {
    constructor(name) {
        this.name = name;
    }
    print() {
        console.log(this.name);
    }
}
class Employeex extends Persona {
    constructor(name, funcao) {
        super(name);
        this.funcao = funcao;
    }
}
let henrique = new Persona('Henrique');
let akio = new Employeex('Akio', 'Empresário');
