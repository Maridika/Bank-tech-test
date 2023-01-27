const ac = require('../../models/account');
const cl = require('../../models/client');


test('check initial balance', () => {
    const client = new cl("Alex", "Kumar");
    const account = new ac("325", client);
    expect(account.balance).toBe(0.0);
});

test('test deposit and widthdraw', () => {
    const client = new cl("Alex", "Kumar");
    const account = new ac("325", client);
    account.deposit("2023-01-10", 1000.0);
    expect(account.balance).toBe(1000.0);
    account.deposit("2023-01-13", 2000.0);
    expect(account.balance).toBe(3000.0);
    account.withdraw("2023-01-14", 500.0);
    expect(account.balance).toBe(2500.0);
});

test('No money test', () => {
    const client = new cl("Alex", "Kumar");
    const account = new ac("325", client);
    account.deposit("2023-01-10", 1000.0);
    expect(account.balance).toBe(1000.0);
    expect(() => {account.withdraw("2023-01-14", 2500.0)}).toThrow("Not enough money.");
});

test('check statement', () => {
    const expRes = "date||credit||debit||balance\n14/1/2023|| ||500||2500\n13/1/2023||2000|| ||3000\n10/1/2023||1000|| ||1000";
    const client = new cl("Alex", "Kumar");
    const account = new ac("325", client);
    account.deposit("2023-01-10", 1000.0);
    account.deposit("2023-01-13", 2000.0);
    account.withdraw("2023-01-14", 500.0);
    expect(account.printStatement()).toBe(expRes);
});
