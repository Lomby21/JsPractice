function findNthPrime(n, primes){
  var numberInTest;
  numberInTest = primes[primes.length - 1];
  while (primes.length < n){
    numberInTest += 2;
    var primeFlag = true;
    for (var i = 1; (i < primes.length) && primeFlag; i++){
        if (numberInTest % primes[i] === 0){
            primeFlag = false;
        }
    }
    if (primeFlag){
        primes.push(numberInTest);
    }
  }
  return primes[primes.length - 1];
}

var primes = [2, 3];
findNthPrime(10001, primes);
