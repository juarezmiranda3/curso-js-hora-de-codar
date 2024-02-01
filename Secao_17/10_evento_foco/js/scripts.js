let input1 = document.querySelector("#input1");

input1.addEventListener("focus", function() {
    console.log("Entrou no input");
});

let input2 = document.querySelector("#input2");

input2.addEventListener("blur", function() {
    console.log("Saiu do input");
});