function getAdder(a) {
  return function(b) {
    return a+b;
  }
  //return (b) => {return a+b;};
}

let add3 = getAdder(3);
let x = add3(5);
console.log(x);

let add5 = getAdder(5);
console.log(add3(add5(1)));

console.log(getAdder(3)(2));
