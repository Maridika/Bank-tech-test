cl = require ('./models/client');
ac = require ('./models/account');

var client1 = new cl("John", "Smith");
account1 = new ac("0001", client1);
account1.deposit("2023-01-10", 1000.0);
account1.deposit("2023-01-13", 2000.0);
account1.withdraw("2023-01-14", 500.0);
console.log(account1.printStatement());