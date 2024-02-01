const validarId = /\d+ID\b/;

console.log(validarId.test('34788ID'));
console.log(validarId.test('ID'));
console.log(validarId.test('8594578'));
console.log(validarId.test('5465675ID8849'));
console.log(validarId.test(' '));
console.log(validarId.test('reoijgoi'));