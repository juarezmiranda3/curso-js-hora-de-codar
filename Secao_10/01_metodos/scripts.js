const cachorro = {
    
    raca: 'SRD',

    uivar: function(){
        console.log('AUAUAUAUAU');
    },

    rosnar: function(){
        console.log('GRRRRRRRRR');
    },

    setRaca: function(raca) {
        this.raca = raca;
    },
    
    getRaca: function() {
        console.log('A raça é ' + this.raca);
    }
}

cachorro.uivar();
cachorro.rosnar();

console.log(cachorro.raca);

cachorro.setRaca('Caramelo Brasileiro');

cachorro.getRaca();