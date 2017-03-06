function findHighestPrimeFactor(someNumber, primes){
    var highestPossiblePrimeFactor = Math.floor(Math.sqrt(someNumber));
    var primeFactorFound = false
    if (primes.length === 0 || highestPossiblePrimeFactor > primes[primes.length - 1]){
        checkForNewPrimes(highestPossiblePrimeFactor, primes);
    }
    for (var x = primes.length - 1; (x >= 0) && !primeFactorFound; x--){
        if (someNumber % primes[x] === 0){
            primeFactorFound = true;
            return primes[x];
        }
    }
    if (!primeFactorFound){
        return someNumber;
    }
}

function checkForNewPrimes(upperLimit, primes){
    if (primes.length === 0){
       primes.push(2);
    }
    for (var numberInTest = primes[primes.length - 1]; numberInTest <= upperLimit; numberInTest++){
        var primeFlag = true;
        for (var i = 0; (i < primes.length) && primeFlag; i++){
            if (numberInTest % primes[i] === 0){
                primeFlag = false;
            }
        }
        if (primeFlag){
            primes.push(numberInTest);
        }
    }
}

var primes = [];
findHighestPrimeFactor(600851475143, primes);
