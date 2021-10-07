"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Employee2 = exports.Persona = void 0;
class Persona {
    constructor(name) {
        this.name = name;
    }
    print() {
        console.log(this.name);
    }
}
exports.Persona = Persona;
class Employee2 extends Persona {
    constructor(name, funcao) {
        super(name);
        this.funcao = funcao;
    }
    print() {
        super.print();
        console.log(this.funcao);
    }
}
exports.Employee2 = Employee2;
/*
let henrique = new Persona('Henrique');
henrique.print();
console.log(henrique);
console.log('*******************************************');
let akio = new Employee2('Akio', 'Empresário');
akio.print();
console.log(akio);

// IMPORTANTE : NAO UTILIZAR
let leonardo = {name: 'Leonardo'} as Persona;
// leonardo.print(); // não pode
console.log(leonardo);

let bheatriz = <Persona>{ name: 'Bheatriz'};
console.log(bheatriz);

*/ 
