// Aceita qualquer valor

const pontoRegex = /./;

// console.log(pontoRegex.test('hfiudsah'));  
// console.log(pontoRegex.test(1323)); 
// console.log(pontoRegex.test());
// console.log(pontoRegex.test(true));
// console.log(pontoRegex.test('   '));
// console.log(pontoRegex.test(['hfiudsah', 'kfja']));

// Números [0-9]

const dRegex = /\d/; 

// console.log(dRegex.test('fidsah'));  
// console.log(dRegex.test(1323)); 
// console.log(dRegex.test());
// console.log(dRegex.test(true));
// console.log(dRegex.test('   '));
// console.log(dRegex.test(['hfiuf43ah', 'kfja']));

// Qualquer valor que não seja somente númérico [^0-9]

const DRegex = /\D/; 

// console.log(DRegex.test('fidsah'));  
// console.log(DRegex.test(1323)); 
// console.log(DRegex.test());
// console.log(DRegex.test(true));
// console.log(DRegex.test('   '));
// console.log(DRegex.test(['hfiuf43ah', 'kfja', 54]));

// Aceita apenas espaço ('  ')

const sRegex = /\s/; 

// console.log(sRegex.test('fidsah'));  
// console.log(sRegex.test(1323)); 
// console.log(sRegex.test());
// console.log(sRegex.test(true));
// console.log(sRegex.test('   '));
// console.log(sRegex.test(['hfiuf43ah', 'kfja', 54]));

// Aceita apenas caracteres alfanuméricos
// Ou seja, não aceita espaço - '  '

const wRegex = /\w/; 

console.log(wRegex.test('fidsah'));  
console.log(wRegex.test(1323)); 
console.log(wRegex.test());
console.log(wRegex.test(true));
console.log(wRegex.test('   '));
console.log(wRegex.test(['hfiuf43ah', 'kfja', 54]));