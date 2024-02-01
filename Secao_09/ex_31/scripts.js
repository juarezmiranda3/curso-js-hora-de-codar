let deusesOlimpo = [
    'Hera',
    'Zeus',
    'Poseidon',
    'Hades',
    'Atenas',
    'Ártemis',
    'Apolo'
];

let guerreiros = [
    'Hércules',
    'Ulisses',
    'Teseo'
];

function verificaTamanhoArray(array) {
    if(array.length > 5){
        console.log('muitos elementos...');
    } else {
        console.log('poucos elementos...');
    }
}

verificaTamanhoArray(deusesOlimpo);
verificaTamanhoArray(guerreiros);