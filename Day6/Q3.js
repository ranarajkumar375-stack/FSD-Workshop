// Create a class BankAccount with accountNo, holderName, and balance. Use a constructor to initialize the account.
// Provide instance methods deposit(amount), withdraw(amount), and displayBalance().
// Withdrawal should not be allowed when the requested amount is greater than the available balance.
// Create a static method bankInfo() that displays the bank name and general baning client information.
// Create two account objects and perform different transaction on them.
//  Concept : Constructor , Onjects , balance Method , Static Method , Object State. 

class BankAccount {

    constructor(accountNo, holderName, balance) {
        this.accountNo = accountNo;
        this.holderName = holderName;
        this.balance = balance;
    }
    deposit(amount) {
        this.balance += amount;
        console.log("₹" + amount + " deposited successfully.");
    }
    withdraw(amount) {
        if (amount > this.balance) {
            console.log("Insufficient balance. Withdrawal not allowed.");
        } else {
            this.balance -= amount;
            console.log("₹" + amount + " withdrawn successfully.");
        }
    }
    displayBalance() {
        console.log("Account No: " + this.accountNo);
        console.log("Holder Name: " + this.holderName);
        console.log("Current Balance: ₹" + this.balance);
        console.log("---------------------------");
    }
    static bankInfo() {
        console.log("Bank Name: ABC Bank");
        console.log("Banking Information: We provide savings, deposits and withdrawal services to our customers.");
        console.log("---------------------------");
    }
}

BankAccount.bankInfo();

let acc1 = new BankAccount(101, "Rahul", 5000);
let acc2 = new BankAccount(102, "Virat", 3000);

console.log("Account 1 Transactions:");
acc1.displayBalance();
acc1.deposit(2000);
acc1.withdraw(1500);
acc1.displayBalance();

console.log("Account 2 Transactions:");
acc2.displayBalance();
acc2.deposit(1000);
acc2.withdraw(5000);
acc2.displayBalance();