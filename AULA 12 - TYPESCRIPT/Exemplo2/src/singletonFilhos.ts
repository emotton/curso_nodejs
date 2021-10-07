class Filho{
    private name:string;
    static instance:Filho;
    private constructor(name:string){
        this.name = name;
    }
    static getInstance(name:string):Filho{
        if(Filho.instance == undefined){
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