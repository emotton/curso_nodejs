const Animal = require('./AnimalCls');
const Cachorro = require('./CachorroCls')
const Gato = require('./GatoCls')

var c1 = new Cachorro(4);
// c1.respirar();
// c1.latir();

var g1 = new Gato(4);
// g1.respirar();
// g1.miar();

var x1 = new Animal(4);

function lavar(bichos){
    bichos.forEach(bicho => {
        console.log(bicho);
        if(bicho instanceof Cachorro){
            bicho.latir();
        } else if(bicho instanceof Gato){
            bicho.miar();
        } else if(bicho instanceof Animal){
            bicho.respirar();
            console.log('repira, mas não é gato nem cachorro !');
        } else {
            console.log('não faço ideia do que é isso, não lavo não !')
        }
    });
}

var animais = [];

animais.push(c1);
animais.push(g1);
animais.push(100);
animais.push(x1);

lavar(animais);

