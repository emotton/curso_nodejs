var Animal = require('./AnimalCls')

module.exports = class Cachorro extends Animal{
    constructor(patas) {
      super(patas);
    }
  
    latir() {
      console.log("Esse cachorro late!");
    }
  }