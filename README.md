# Bank-tech-test

This project demonstrates the work of basic banking account - withdrawal, deposit, statement 
It is written on Java script, Node JS
It is written from scratch. The main problem was formatting the statement look and sorting the output. I used Eslint to spot potential problems, which are now partially fixed.
I plan to do refactoring the code in the future, in accordance with full assesment criteria.
I also want to add more tests to make a better code coverage.

# Installation
``` bash
git clone https://github.com/Maridika/Bank-tech-test.git
cd Bank-tech-test
npm install
# to run
node index.js
# to test
npm test
```

# How To Use

There are several classes that can be used. The main class is Accaunt. It has a constructor and several methods:
- constructor <br>
It has 2 arguments: account number and client (instance of Client class that represents a client)
- deposit <br>
Adds amount to the account. It has 2 arguments: date and amount. The date format is "yyyy-mm-dd".
- withdraw <br>
Withdraws amount from the account. It has 2 arguments: date and amount. The date format is "yyyy-mm-dd".
- printStatement <br>
Creates a statement that can be printed. Example: console.log(account1.printStatement());

# Credits
I'm greatful to [Makers Academy](https://github.com/enterprises/makers-academy) for this expirience.

# License
GPL License
