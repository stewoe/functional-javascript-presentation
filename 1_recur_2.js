
function fibIter(n) {
  if(n == 1 || n == 2) {
    return 1;
  }

  var ret = 0;
  var fib1 = 1;
  var fib2 = 1;
  var idx = 3;

  while(idx <= n) {
    ret = fib1 + fib2;
    fib1 = fib2;
    fib2 = ret;

    idx++;
  }

  return ret;
}

function fib(n) {
  return (n == 1 || n == 2) 
    ? 1
    : fib(n-1) + fib(n-2);
}

console.log(fib(10));
