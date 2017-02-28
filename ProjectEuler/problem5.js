var possiblePrimeFactors = [];
var arrayOfFactors = [];
   
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
 
function findLowestCommonFactors(someNumber){
  var total;
  checkForNewPrimes(someNumber, possiblePrimeFactors);
  for (var x = 0; x < possiblePrimeFactors.length; x++){
    arrayOfFactors[x] = {value: possiblePrimeFactors[x], power: 0};
  }
  for (var i = 2; i <= someNumber; i++){
    total = i;
    for (var j = 0; (j < possiblePrimeFactors.length) && (total > 1); j++){
      var powerOfFactor = 0;
      while (total % possiblePrimeFactors[j] === 0){
        powerOfFactor += 1;
        total = total / possiblePrimeFactors[j];
      }
      if (powerOfFactor > arrayOfFactors[j].power){
        arrayOfFactors[j].power = powerOfFactor;
      }
    }
  }
}

function smallestMultiple(someNumber){
  findLowestCommonFactors(someNumber);
  var total = 1;
  for (var i = 0; i < arrayOfFactors.length; i++){
    total = total * Math.pow(arrayOfFactors[i].value, arrayOfFactors[i].power);
  }
  return total;
}

smallestMultiple(20);
