const iCachorro = {
    raca: 'string',
    cor: 'string',
    patas: 'number'
}

class Cachorro {

    constructor( iCachorro ){
        this.raca = iCachorro.raca;
        this.cor = iCachorro.cor;
        this.patas = iCachorro.patas;
    }
}

Cachorro.prototype.patas = 4;
Cachorro.prototype.raca = 'SRD';

let labrador = new Cachorro({
    raca: 'labrador',
    cor: 'amarelo',
    patas: 4
});

console.log(labrador);