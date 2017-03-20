function permutations(someString) {
  if (someString.length > 1) {
    var shorterString = someString.slice(1);
    permutations(shorterString);
    var newPermutationSet = {};
    for (var i = 0; i < permutationSet.length; i++) {
      var splitPermutation = permutationSet[i].split("");
      for (var j = 0; j <= splitPermutation.length; j++) {
        var newPermutation = splitPermutation.splice(j, 0, someString[0]);
        newPermutationSet.push(toString(newPermutation));
      }
    } 
    permutationSet = newPermutationSet;
  } else {
  permutationSet.push(someString);
  }
}

var permutationSet = {};
var someString = '';

permutations(someString);
