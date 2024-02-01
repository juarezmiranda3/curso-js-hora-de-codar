let cachorro = {
    patas: 4,
    nome: 'Lilica',
    raça: 'Pinscher mini',
    idade: 9,
    peso: 1.8,
    latir: function(){
        console.log('auauauau');
    }
}

let cachorro2 = {
    patas: 4,
    nome: 'Mel',
    raça: 'Caramelo brasileiro',
    idade: 8,
    peso: 4.5,
    latir: function(){
        console.log('auauauau');
    }
}

console.log(cachorro, cachorro2)

cachorro2.latir();