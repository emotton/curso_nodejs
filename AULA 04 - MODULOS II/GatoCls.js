var Animal = require('./AnimalCls')

module.exports = class Gato extends Animal{
    constructor(patas) {
      super(patas);
    }
  
    miar() {
      console.log("Esse gato mia!");
    }
  }