function verificarTipoDado(dado){

    tipoDado = ''

    switch(typeof(dado)){

        case "string":
            tipoDado = 'string';
            break;
        case "number":
            tipoDado = 'number';
            break;
        case "bigint":
            tipoDado = 'bigint';
            break;
        case "boolean":
            tipoDado = 'boolean';
            break;
        case "symbol":
            tipoDado = 'symbol';
            break;
        case "undefined":
            tipoDado = 'undefined';
            break;
        case "object":
            tipoDado = 'object';
            break;
        case "function":
            tipoDado = 'function';
            break;
    }

    console.log(`O dado ${dado} é do tipo ${tipoDado}`);
}

verificarTipoDado(1);
verificarTipoDado('1');
verificarTipoDado(false);
verificarTipoDado(undefined);

console.log('===================');

console.log(typeof(NaN));