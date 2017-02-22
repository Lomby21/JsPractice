var total = 0;
var x = 1, y = 1, z;

function nextFibNumber(currentFibNumber, previousFibNumber){
  return currentFibNumber + previousFibNumber;
}

function isEven(someNumber){
  if (someNumber % 2 == 0){
    return someNumber;
  } else {
    return 0;
  }
}

while (x < 4000000){
  z = nextFibNumber(x, y);
  y = x;
  x = z;
  total += isEven(x);
}
console.log(total);
