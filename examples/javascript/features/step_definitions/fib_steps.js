function fibanacci(n){
  return n<2?n:fibanacci(n-1)+fibanacci(n-2);
}

var fibonacciSeries = function(fibonacciLimit) {
  var result = Array();
  var currentFibanacciValue = fibanacci(1);
  var i = 2;
  while(currentFibanacciValue < fibonacciLimit) {
    result.push(currentFibanacciValue);
    currentFibanacciValue  = fibanacci(i);
    i++;
  }
  return result;
}

var fibResult;

When(/^I ask Javascript to calculate fibonacci up to (\d+)$/, function(n){
  fibResult = fibonacciSeries(n);
});

Then(/^it should give me (\[.*\])$/, function(expectedResult){
  fibResult = fibResult.join(",");
  if(fibResult != expectedResult){
    throw 'Expected <' + expectedResult + "> but got <" + fibResult + ">";
  }
});
