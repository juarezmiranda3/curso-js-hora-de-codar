class ContaBancaria {

    constructor(saldo){
        this.saldo = saldo
    }

    sacar(num) {
        this.saldo -= num;
    }

    depositar(num) {
        this.saldo += num;
    }
}

let minhaConta = new ContaBancaria(0);

console.log(minhaConta.saldo);


minhaConta.depositar(100);
console.log(minhaConta.saldo);


minhaConta.sacar(50);
console.log(minhaConta.saldo);