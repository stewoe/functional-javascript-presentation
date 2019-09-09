var _ = require('lodash');

function saveSumOfFemaleAccounts() {
  let isFemale = (person) => {return person.gender == 'f';};
  let doubleBalance =(p) => {
          p.accountBalance *= 2;
          return p;
  }; 
  let sumBalance = (sum, p) => { return sum + p.accountBalance; };

  console.log(
    _.filter(loadAccounts(), isFemale)
     .map(doubleBalance)
     .reduce(sumBalance, 0)
  );
  
}

function loadAccounts() {
  return [
    {name: 'Alice', gender: 'f', birthYear: 1980, accountBalance: 1000},
    {name: 'Bob', gender: 'm', birthYear: 1982, accountBalance: 1500},
    {name: 'Carolina', gender: 'f', birthYear: 1986, accountBalance: 2000},
    {name: 'Daniel', gender: 'm', birthYear: 1989, accountBalance: 2500},
    {name: 'Epiphone', gender: 'f', birthYear: 1993, accountBalance: 3000},
    {name: 'Frank', gender: 'm', birthYear: 1995, accountBalance: 3500}
  ];
}

saveSumOfFemaleAccounts();
