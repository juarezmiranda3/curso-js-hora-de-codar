// Classe: guarda apenas as propriedades

function Cachorro(raca, patas, cor) {
    this.raca = raca;
    this.patas = patas;
    this.cor = cor;
}

// Métodos ficam "independentes" da classe

Cachorro.prototype.uivar = function() {
    console.log("AUUUUUU")
}

Cachorro.prototype.latir = function() {
    console.log("AU AU AU")
}

let husky = new Cachorro('Husky', 4, 'cinza');

husky.uivar();
husky.latir();