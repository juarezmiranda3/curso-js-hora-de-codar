const reg1 = new RegExp('bola');

console.log(reg1.test('kojfjgdsfjiouhibolafjiodjfi')); // tem 'bola'
console.log(reg1.test('iuafsdpfhuifhifhjsdf')); // n tem bola

const reg2 = /bola/;

console.log(reg2.test('kojfjgdsfjiouhibolafjiodjfi')); // tem 'bola'
console.log(reg2.test('iuafsdpfhuifhifhjsdf')); // n tem bola