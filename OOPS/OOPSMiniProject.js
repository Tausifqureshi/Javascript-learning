// ------------------------------
// ABSTRACT CLASS (Base Blueprint)
// ------------------------------
class BankAccount {
  #balance = 0; // ❗ Encapsulation: private variable

  constructor(ownerName, accountNumber) {
    if (new.target === BankAccount) {
      throw new Error("BankAccount is an abstract class!");
    }

    this.ownerName = ownerName;
    this.accountNumber = accountNumber;
  }

  // Deposit method (Common for all accounts)
  deposit(amount) {
    if (amount <= 0) {
      console.log("Amount must be positive");
      return;
    }
    this.#balance += amount;
    console.log(`${amount} deposited. New Balance: ${this.#balance}`);
  }

  // Withdraw method → Will be OVERRIDDEN (Polymorphism)
  withdraw(amount) {
    throw new Error("Withdraw must be implemented in child classes!");
  }

  // Getter (public) → private balance ko read karne ke liye
  getBalance() {
    return this.#balance;
  }

  // Protected-like method (not fully private)
  _deduct(amount) {
    this.#balance -= amount;
  }
}

// --------------------------------------------------
// INHERITANCE → Child class SavingsAccount
// --------------------------------------------------
// Ye BankAccount ka pura structure inherit karta hai
// Withdraw ka apna rule bana kar polymorphism karta hai
// --------------------------------------------------

// ------------------------------
class SavingsAccount extends BankAccount {
  constructor(ownerName, accountNumber) {
    super(ownerName, accountNumber);
    this.withdrawLimit = 20000; // per transaction limit
  }

  // POLYMORPHISM → method overriding
  withdraw(amount) {
    if (amount > this.withdrawLimit) {
      console.log("Savings Account limit exceeded!");
      return;
    }

    if (amount > this.getBalance()) {
      console.log("Insufficient funds!");
      return;
    }

    this._deduct(amount);
    console.log(`Savings: ₹${amount} withdrawn. Balance: ${this.getBalance()}`);
  }
}

// ------------------------------
// CURRENT ACCOUNT (Inheritance + Polymorphism)
// ------------------------------
class CurrentAccount extends BankAccount {
  constructor(ownerName, accountNumber) {
    super(ownerName, accountNumber);
    this.overdraftLimit = 5000; // can go in negative
  }

  // POLYMORPHISM → method overriding
  withdraw(amount) {
    const available = this.getBalance() + this.overdraftLimit;

    if (amount > available) {
      console.log("Overdraft limit exceeded!");
      return;
    }

    this._deduct(amount);
    console.log(
      `Current: ₹${amount} withdrawn. Balance: ${this.getBalance()}`
    );
  }
}

// ------------------------------
// USING THE MINI PROJECT
// ------------------------------

// Savings Account user
const user1 = new SavingsAccount("Tausif", "SA001");
user1.deposit(10000);
user1.withdraw(3000); // OK
user1.withdraw(25000); // ❌ limit exceeded

console.log("Final Savings Balance:", user1.getBalance());

// Current Account user
const user2 = new CurrentAccount("Rahim", "CA001");
user2.deposit(2000);
user2.withdraw(6000); // overdraft allowed
user2.withdraw(12000); // ❌ overdraft exceeded

console.log("Final Current Balance:", user2.getBalance());
