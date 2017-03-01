function convertStringToLetterCount(inputString){
  var letterCounter = [];
  var letterFound;
  for (var i = 0; i < inputString.length; i++){
    if (letterCounter.length === 0){
      letterCounter.push({letter: inputString.charAt(i), count: 1});
    } else {
      letterFound = false;
      for (var j = 0; ((j < letterCounter.length) && !letterFound); j++){
        if inputString.charAt(i) === letterCounter[j].letter{
          letterCounter[j].count += 1;
          letterFound = true;
        }
      }
      if (!letterFound){
        letterCounter.push({letter: inputString.charAt(i), count: 1});
      }
    }
  }
  return letterCounter;
}

function checkForPalindromicComponents(letterCounter){
  var palindromic = true;
  var oddLetterCount = 0;
  for (var i = 0; ((i < letterCounter.length) && palindromic); i++){
    if (letterCounter[i].count % 2 !== 0){
      oddLetterCount += 1;
      if (oddLetterCount > 1){
        palindromic = false;
      }
    }
  }
  return palindromic;
}
  
    
        
