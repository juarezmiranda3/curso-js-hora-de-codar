function saudar(nome) {

    if(typeof nome != 'string'){
        
        throw new Error("O parâmetro nome precisa ser uma string");
    } else {

        console.log(`Olá ${nome}!!!`);
    }
}

saudar("Juarez");
saudar(234578);

console.log('teste');