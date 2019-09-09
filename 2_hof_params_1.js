function saveSumOfFemaleAccounts() {
  // Load Data
  let persons = [
    {name: 'Alice', gender: 'f', birthYear: 1980, accountBalance: 1000},
    {name: 'Bob', gender: 'm', birthYear: 1982, accountBalance: 1500},
    {name: 'Carolina', gender: 'f', birthYear: 1986, accountBalance: 2000},
    {name: 'Daniel', gender: 'm', birthYear: 1989, accountBalance: 2500},
    {name: 'Epiphone', gender: 'f', birthYear: 1993, accountBalance: 3000},
    {name: 'Frank', gender: 'm', birthYear: 1995, accountBalance: 3500}
  ];

  // Filter only female
  let femalePersons = [];
  for(let i=0; i < persons.length; i++) {
    if(persons[i].gender == 'f') {
      femalePersons.push(persons[i]);
    }
  }

  // Double Balance
  for(let i=0; i < femalePersons.length; i++) {    
      femalePersons[i].accountBalance *= 2;
  }

  // Calculate sum of the account balances
  var sum = 0;
  for(let i=0; i < femalePersons.length; i++) {
    sum += femalePersons[i].accountBalance;
  }

  // Store the result
  console.log(sum);

  // debug
  // console.log(femalePersons);
}

saveSumOfFemaleAccounts();
