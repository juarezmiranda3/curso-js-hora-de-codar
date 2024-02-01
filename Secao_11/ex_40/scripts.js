class BankAccount {

    constructor( checkingAccBalance, savingsAccBalance, interest ) {

        this.checkingAccBalance = checkingAccBalance;
        this.savingsAccBalance = savingsAccBalance;
        this.interest = interest;
    }

    withdraw( moneyWithdrawn ) {

        this.checkingAccBalance -= moneyWithdrawn;
    }

    deposit( moneyDeposited ) {
        
        this.checkingAccBalance += moneyDeposited;
    }

    transferSavingsChecking( moneyTransfered ) {

        this.checkingAccBalance += moneyTransfered;
        this.savingsAccBalance -= moneyTransfered;
    }
}

let contaItau = new BankAccount(1000, 300, 2);
console.log(contaItau);

contaItau.deposit(200);
console.log(contaItau);

contaItau.withdraw(100);
console.log(contaItau)

contaItau.transferSavingsChecking(200);
console.log(contaItau);

let specialBankAcc = new BankAccount(10000, 20000, 4);

console.log(specialBankAcc);