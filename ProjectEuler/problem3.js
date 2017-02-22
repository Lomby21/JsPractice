function isPrime(someNumber){
//This function determines if the input number 'someNumber' is prime.
    var primeFlag = true;
     for (x = 2; (x < (someNumber / 2) + 1) && primeFlag; x++){
       if (someNumber % x == 0){
         primeFlag = false;
       }
     }
     return primeFlag;
}

function listPrimes(someNumber){
//This function returns an array of all prime numbers lower than the input 'someNumber'.
    var primes = [];
    for (x = 1; x < (someNumber / 2) + 1; x++){
        if (isPrime(x)){
           primes.push(x);
        }
     }
     return primes;
}          

function findPrimeFactors(someNumber, possiblePrimeFactors){
    var primeFactors = [];
    for (x = 0; x < possiblePrimeFactors.length; x++){
       if (someNumber % possiblePrimeFactors[x] == 0) {
          primeFactors.push(possiblePrimeFactors[x]);
       }
    }
    return primeFactors;
}

console.log(findPrimeFactors(600851475143, listPossiblePrimeFactors(600851475143)));
