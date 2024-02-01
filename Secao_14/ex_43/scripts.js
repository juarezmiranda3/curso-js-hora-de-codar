const marca = /Marca: (Nike|Adidas|Puma|Asics)/;

console.log(marca.test('Marca: Nike'));
console.log(marca.test('Marca: Adidas'));
console.log(marca.test('Marca: Puma'));
console.log(marca.test('Marca: Asics'));
console.log(marca.test('Marca: fjksdoahfahiu'));