function saveSumOfFemaleAccounts() {
  // Load Data
  let persons = loadAccounts();

  // Filter only female
  let femalePersons = filter(persons, (person) => {return person.gender == 'f';});
  
  // Double Balance
  map(femalePersons, (p) => {p.accountBalance *= 2;});

  // Calculate sum of the account balances
  let sum = reduce(femalePersons, (sum, p) => { return sum + p.accountBalance; }, 0);

  // Store the result
  console.log(sum);

  // debug
  // console.log(femalePersons);
}

function reduce(collection, reducer, accumulator) {
  var retVal = accumulator;
  
  for(let i=0; i<collection.length; i++) {
    retVal = reducer(retVal, collection[i]);
  }

  return retVal;
}

function map(collection, action) {
  let colRet = [];

  for(let i=0; i<collection.length; i++) {
    colRet.push(action(collection[i]));    
  }

  return colRet;
}

function filter(collection, predicate) {
  let colRet = [];

  for(let i=0; i<collection.length; i++) {
    if(predicate(collection[i])) {
      colRet.push(collection[i]);
    }
  }

  return colRet;
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
