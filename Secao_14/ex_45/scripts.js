const regexUsername = /^(?=.{3,16}$)[a-z0-9-_]/;

console.log(regexUsername.test("matheus_123"));
console.log(regexUsername.test("tyggs"));
console.log(regexUsername.test("12"));
console.log(regexUsername.test("   "));
console.log(regexUsername.test(""));
