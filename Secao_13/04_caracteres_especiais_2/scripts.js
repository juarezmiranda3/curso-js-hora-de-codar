const dia = /\d\d/;

// console.log(dia.test("20"));
// console.log(dia.test("2023"))
// console.log(dia.test("Hello"))
// console.log(dia.test("Hello12"))
// console.log(dia.test("1Hello2"))
// console.log(dia.test("   "))

// console.log(dia.test("20") && "20".length == 2);
// console.log(dia.test("2023") && "2023".length == 2)
// console.log(dia.test("Hello"))
// console.log(dia.test("Hello12") && "Hello12".length == 2)
// console.log(dia.test("1Hello2"))
// console.log(dia.test("   "))

const palavraTresLetras = /\w\w\w/;

console.log(palavraTresLetras.test("abc"));
console.log(palavraTresLetras.test("abcd"));
console.log(palavraTresLetras.test("ab"));