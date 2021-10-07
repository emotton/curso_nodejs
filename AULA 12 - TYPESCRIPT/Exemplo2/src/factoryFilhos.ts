class FilhoFamilia{
    private name:string;
    static filhos:FilhoFamilia[] = [];
    private static maximo = 3; 
    private constructor(name:string){
        this.name = name;
    }
    static getInstance(name:string):any{
        if(FilhoFamilia.filhos.length < FilhoFamilia.maximo){
            let filho:FilhoFamilia = new FilhoFamilia(name);
            FilhoFamilia.filhos.push(filho);
            return filho;
        } else {
            return undefined;
        }
        
    }
}

let cain1 = FilhoFamilia.getInstance('Cain');
console.log(cain1);

let abel1 = FilhoFamilia.getInstance('Abel');
console.log(abel1);

let clotilde = FilhoFamilia.getInstance('Clotilde');
console.log(clotilde);

let gumercindo = FilhoFamilia.getInstance('Gumercindo');
console.log(gumercindo);