const notAB = /[^ab]/;

console.log(notAB.test("a"));
console.log(notAB.test("aquiestaachave"));
console.log(notAB.test("bbbbbb"));
console.log(notAB.test("ab"));
console.log(notAB.test("aabbaaabababab"));

const notAAteZ = /[^a-z]/;

// console.log(notAAteZ.test("a"));
// console.log(notAAteZ.test("aquiestaachave"));
// console.log(notAAteZ.test("bbbbbb"));
// console.log(notAAteZ.test("ab"));
// console.log(notAAteZ.test("aabbaaabababab"));