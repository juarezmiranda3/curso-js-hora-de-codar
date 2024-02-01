let num = 1;
let num1 = 5;
let num2 = 3;
let num3 = 4;

function imprimirNumeros(...args){
    for(let i = 0; i < args.length; i++){
        console.log(args[i]);
    }
}

imprimirNumeros(num, num2, num3);
console.log('----');
imprimirNumeros(num, num2);
console.log('----');
imprimirNumeros(2, 3, 4, 5, 6, 7, 8, 9);