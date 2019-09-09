
function factIter(n) {
  var ret = 1;
  
  for(let i=1; i<=n; i++) {
    ret = ret * i;
  }

  return ret;
}

function fact(n) {
  return (n == 1)
    ? 1
    : n * fact(n-1);
}

console.log(factIter(4));
console.log(fact(4));
