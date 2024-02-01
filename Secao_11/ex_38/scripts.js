class Adress {

    constructor(street, neighborhood, city, state) {

        this.street = street;
        this.neighborhood = neighborhood;
        this.city = city;
        this.state = state;

        this.completeAdress = `${street} street, ${neighborhood} - ${city} (${state})`;
    }

    setStreet(street) {

        this.street = street;
    }

    setNeighborhood(neighborhood) {

        this.neighborhood = neighborhood;
    }

    setCity(city) {

        this.city = city;
    }

    setState(state) {

        this.state = state;
    }

    getCompleteAdress() {

        return `${this.street} street, ${this.neighborhood} - ${this.city} (${this.state})`;
    }
}

myAdress = new Adress('Francisco Ricardo da Silva', 'Angola', 'Betim', 'Minas Gerais')

console.log(myAdress.getCompleteAdress());


myAdress.setStreet('Brasília');
myAdress.setNeighborhood('237'); 
myAdress.setCity('Igarapé'); 


console.log(myAdress.getCompleteAdress());