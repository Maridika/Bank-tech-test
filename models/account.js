const tr = require('./transaction');
const stDelim = "\n";
const trDelim = "||";
const dtDelim = "/";

class Account {
    constructor(number, client) {
        this.number = number;
        this.client = client;
        this.balance = 0.0;
        this.transactions = [];
    }

    deposit(date, amount) {
        this.transactions.push(new tr(new Date(date), amount));
        this.balance += amount;
    }

    withdraw(date, amount) {
        if(amount>this.balance) {
            throw "Not enough money.";
        }
        this.transactions.push(new tr(new Date(date), -amount));
        this.balance -= amount;
    }

    balance() {
        return this.balance;
    }

    printStatement() {
        const arr = [];
        var sBalance = this.balance;
        arr.push(this.printHeader());
        this.transactions.sort((a,b) => {
            return (b.getDate().getTime() - a.getDate().getTime());
        }).forEach(element => {
            arr.push(this.printTransaction(element, sBalance));
            sBalance -= element.getAmount();
        });
        return arr.join(stDelim);
    }

    printHeader() {
        const arr = [];
        arr.push("date");
        arr.push("credit");
        arr.push("debit");
        arr.push("balance");
        return arr.join(trDelim);
    }

    printTransaction(trn, balance) {
        const arr = [];
        arr.push(this.formatDate(trn.getDate()));
        if(trn.getAmount() >= 0.0) {
            arr.push(trn.getAmount());
            arr.push(" ");
        } else {
            arr.push(" ");
            arr.push(-trn.getAmount());
        }
        arr.push(balance);
        return arr.join(trDelim);
    }

    formatDate(date) {
        const arr = [];
        arr.push(date.getDate());
        arr.push(date.getMonth()+1);
        arr.push(date.getFullYear());
        return arr.join(dtDelim);
    }
};

module.exports = Account;