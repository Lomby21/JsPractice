function isPalindrome(someNumber){
    var numberAsArray = someNumber.toString(10).split("");
    if (numberAsArray.length % 2 !== 0) {
        numberAsArray.splice(Math.floor(numberAsArray.length / 2), 1);
    }
    var numberIsPalindrome = true;
    for (var i = 0; ((i < numberAsArray.length) && numberIsPalindrome); i++){
        if (numberAsArray[i] !== numberAsArray[numberAsArray.length - 1 - i]){
            numberIsPalindrome = false;
        }
    }
    return numberIsPalindrome;
}

var highestFound = [0, 0, 0];
for (var x = 999; x > 0; x--){
    for (var y = 999; y > 0; y--){
        if (x * y > highestFound[0]){
            if (isPalindrome(x * y)){
                highestFound = [x * y, x, y];
            }
        }
    }
}
console.log(highestFound[0] + ' is the largest palindromic number found as the product of ' + highestFound[1] + ' and ' + highestFound[2]);
