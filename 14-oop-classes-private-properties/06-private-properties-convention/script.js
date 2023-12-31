class Wallet {
  constructor() {
    this._balance = 0;
    this._transactions = [];
  }

  deposit(amount) {
    this._processDeposit(amount);
    this._balance += amount;
  }

  withdraw(amount) {
    if (amount > this._balance) {
      console.log("Not Enough Funds");
      return;
    }
    this._processWithdraw(amount);
    this._balance -= amount;
  }

  _processDeposit(amount) {
    console.log(`Depositing: ${amount}`);

    this._transactions.push({
      type: "deposit",
      amount,
    });
  }

  _processWithdraw(amount) {
    console.log(`Withdrawing: ${amount}`);

    this._transactions.push({
      type: "withdraw",
      amount,
    });
  }

  //   getBalance() {
  //     return this._balance;
  //   }

  get balance() {
    return this._balance;
  }

  get transactions() {
    return this._transactions;
  }
}

const wallet1 = new Wallet();
wallet1.deposit(200);
wallet1.withdraw(50);

// console.log(wallet1._balance);
// console.log(wallet1.getBalance());
console.log(wallet1.balance);
wallet1.withdraw(500);
console.log(wallet1.transactions);
