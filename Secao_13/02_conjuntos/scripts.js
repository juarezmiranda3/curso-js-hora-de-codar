const reg1 = /[12345]/;

console.log(reg1.test(5));
console.log(reg1.test(3));
console.log(reg1.test(545));
console.log(reg1.test('juarez'));


console.log('=============');

const reg2 = /[1-5]/;

console.log(reg2.test(5));
console.log(reg2.test(3));
console.log(reg2.test(545));
console.log(reg2.test('juarez'));