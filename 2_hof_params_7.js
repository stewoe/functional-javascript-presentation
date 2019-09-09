function saveSumOfFemaleAccounts() {
  let isFemale = (person) => {return person.gender == 'f';};
  let doubleBalance =(p) => {
          p.accountBalance *= 2;
          return p;
  }; 
  let sumBalance = (sum, p) => { return sum + p.accountBalance; };

  console.log(
    reduce(
      map(
        filter(loadAccounts(), isFemale),
        doubleBalance),
      sumBalance,
      0)
  );
}

function reduce(collection, reducer, accumulator) {
  var retVal = accumulator;
  
  for(let i=0; i<collection.length; i++) {
    retVal = reducer(retVal, collection[i]);
  }

  return retVal;
}

function jsonCopy(src) {
  return JSON.parse(JSON.stringify(src));
}

function map(collection, action) {
  let colRet = [];

  for(let i=0; i<collection.length; i++) {
    let copy = jsonCopy(collection[i]);
    colRet.push(action(copy));
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
