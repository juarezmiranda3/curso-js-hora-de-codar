let nome = 'teste'


for(let i = 0; i < 10; i++){

    if(i == 3){
        nome = 'joão';
    }

    if(i == 5 && nome == 'joão'){
        console.log('o nome é joão');
        break;
    }

    console.log(i);
}