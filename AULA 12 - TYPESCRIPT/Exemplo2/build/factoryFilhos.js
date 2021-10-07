"use strict";
class FilhoFamilia {
    constructor(name) {
        this.name = name;
    }
    static getInstance(name) {
        if (FilhoFamilia.filhos.length < FilhoFamilia.maximo) {
            let filho = new FilhoFamilia(name);
            FilhoFamilia.filhos.push(filho);
            return filho;
        }
        else {
            return undefined;
        }
    }
}
FilhoFamilia.filhos = [];
FilhoFamilia.maximo = 3;
let cain1 = FilhoFamilia.getInstance('Cain');
console.log(cain1);
let abel1 = FilhoFamilia.getInstance('Abel');
console.log(abel1);
let clotilde = FilhoFamilia.getInstance('Clotilde');
console.log(clotilde);
let gumercindo = FilhoFamilia.getInstance('Gumercindo');
console.log(gumercindo);
