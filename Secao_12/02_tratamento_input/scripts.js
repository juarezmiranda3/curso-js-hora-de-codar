function checarNumero(num) {

    let number = Number(num);

    if(Number.isNaN(number)) {

        console.log('Somente número!')
    } else {

        return number;
    }
}

checarNumero(5);
checarNumero('fkoldsjiopçdsfajhl');
checarNumero('5');