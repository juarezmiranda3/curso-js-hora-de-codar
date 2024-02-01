function informarIdade(idade) {
    
    if(idade === undefined){
        console.log('Idade não foi informada!');
    }

    console.log(`Você tem ${idade} anos`);
}

informarIdade(18);