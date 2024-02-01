function contarStringGrande(str){
    if(str.length > 10){
        console.log('Texto muito longo')
    } else {
        console.log('Texto dentro do limite')
    }
}

contarStringGrande('qwertyuiop'); // 10
contarStringGrande('qwertyuiopa'); // 11
contarStringGrande('q'); // 1