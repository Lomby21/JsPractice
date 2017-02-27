function isPalindrome(someNumber){
    var numberAsString = someNumber.toString();
    if (numberAsString.length % 2 !== 0) {
        numberAsString.splice(Math.floor(numberAsString.length / 2), 1);
        }
        
