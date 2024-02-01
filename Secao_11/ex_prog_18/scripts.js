class Retangulo {

    constructor(largura, altura) {

        this.largura = largura;
        this.altura = altura;
    }

    calcularArea() {
        
        return this.largura * this.altura;
    }

    calcularPerimetro() {
        
        return (2 * (this.largura * this.altura) );
    }
}

let ret = new Retangulo(10, 4);
console.log(ret.calcularArea());
console.log(ret.calcularPerimetro());