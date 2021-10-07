class Persona{
    name:string;
    constructor(name: string){
        this.name = name;
    }
    print():void{
        console.log(this.name);
    }
}

class Employeex extends Persona {
    funcao:string;
    constructor(name: string, funcao:string){
        super(name);
        this.funcao = funcao;
    }
}

let henrique = new Persona('Henrique');
let akio = new Employeex('Akio', 'Empresário');

