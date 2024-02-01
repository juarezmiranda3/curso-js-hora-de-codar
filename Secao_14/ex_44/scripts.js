const regexIP = /\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}/;

console.log(regexIP.test('127.0.0.1')); // Localhost
console.log(regexIP.test('192.168.1.6')); // Máquina minha
console.log(regexIP.test('8.8.8.8')); // Google
console.log(regexIP.test('ghdss'));
console.log(regexIP.test('5456.655'));

