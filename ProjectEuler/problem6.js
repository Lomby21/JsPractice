function sumSquareDifference(limit){
  var sumTotal = 0;
  var squareTotal = 0;
  for (var i = 1; i <= limit; i++){
    sumTotal += i;
    squareTotal += (i*i);
  }
  sumTotal = (sumTotal * sumTotal);
  return sumTotal - squareTotal;
}

sumSquareDifference(100);
