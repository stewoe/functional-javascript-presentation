function createPair(a,b) {
  return {
    'a': a,
    'b': b
  };
}

function getA(pair) {
  return pair.a;
}

function getB(pair) {
  return pair.b;
}

function vectorAdd(p1, p2) {
  return createPair(
    getA(p1) + getA(p2),
    getB(p1) + getB(p2)
  );
}

function printPair(p) {
  console.log('(' + getA(p) + ',' + getB(p) + ')');
}

var v1 = createPair(2,3);
var v2 = createPair(1,1);
printPair(vectorAdd(v1, v2));


// Pairs can implement lists!
var phrase = createPair('hi,', 
   createPair('how',
      createPair('are',
         createPair('you?', null))));

function printList(lst) {
  if(getA(lst) != null) {
    console.log(getA(lst));
  }
  if(getB(lst) != null) {
    printList(getB(lst));
  }
}

printList(phrase);


// Now let's go totally crazy using functions to represent pairs!

function createPair(a,b) {
  return function (choice) {
    return (choice == 1) ? a : b;
  };
}

function getA(pair) {
  return pair(1);
}

function getB(pair) {
  return pair(2);
}
