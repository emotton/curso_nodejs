export class Persona{
    private name:string;
    constructor(name: string){
        this.name = name;
    }
    print():void{
        console.log(this.name);
    }
}

export class Employee2 extends Persona {
    private funcao:string;
    constructor(name: string, funcao:string){
        super(name);
        this.funcao = funcao;
    }
    print():void{
        super.print();
        console.log(this.funcao);
    }
}

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