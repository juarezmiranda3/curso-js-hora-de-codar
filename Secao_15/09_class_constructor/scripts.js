class Cachorro {

    constructor( raca, cor, patas = 4 ){
        this.raca = raca;
        this.pata = patas;
        this.cor = cor;
    }
}

let labrador = new Cachorro('Labrador', 'Amarelo', 4);
let presaCanario = new Cachorro('Labrador', 'Amarelo', 4);
let pinscher = new Cachorro('Pinscher', 'Caramelo');

console.log(labrador);
console.log(pinscher);