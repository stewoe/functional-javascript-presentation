function fib(n) {
  return (n == 1 || n == 2) 
    ? 1
    : fib(n-1) + fib(n-2);
}

function memoizer(f) {
  let cache = {};

  return (n) => {     
    let key = n.toString();

    if(key in cache == false) {
      cache[key] = f(n);
    }

    return cache[key];
  };
}

fib = memoizer(fib);
