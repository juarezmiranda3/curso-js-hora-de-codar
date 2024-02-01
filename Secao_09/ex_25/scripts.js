function retornarNumeroAleatorio(maximo){
    return Math.floor(Math.random() * maximo) + 1;
}

console.log(retornarNumeroAleatorio(50));