"use strict";
class Filho {
    constructor(name) {
        this.name = name;
    }
    static getInstance(name) {
        if (Filho.instance == undefined) {
            Filho.instance = new Filho(name);
        }
        return Filho.instance;
    }
}
// let cain = new Filho('Cain'); // não funciona, construtor privado
let cain = Filho.getInstance('Cain');
console.log(cain);
let abel = Filho.getInstance('Abel');
console.log(abel);
