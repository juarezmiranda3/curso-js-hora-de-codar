class Car {

    constructor(brand, color, gasAvailable) {

        this.brand = brand;
        this.color = color;
        this.gasAvailable = gasAvailable;
    }

    driveCar(kms) {

        // 1 liter of gas = 10km

        this.gasAvailable -= kms / 10;
    }

    fuelCar(gasProvided) {

        this.gasAvailable += gasProvided;
    }
}

let hondaCivic = new Car('Honda', 'Black', 10);
console.log(hondaCivic)

hondaCivic.driveCar(13);
console.log(hondaCivic)