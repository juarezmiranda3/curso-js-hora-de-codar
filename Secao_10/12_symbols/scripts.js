class Cachorro {

    constructor( raca, cor ){
        this.raca = raca;
        this.cor = cor;
    }

    latir(){
        console.log("Au au");
    }

    getCor(){
        return this.cor;
    }

    setCor(cor){
        this.cor = cor;
    }
}

let pastor = new Cachorro('Pastor Alemão', 'sem cor');
console.log(pastor);

pastor.setCor('Preto');

console.log(pastor);