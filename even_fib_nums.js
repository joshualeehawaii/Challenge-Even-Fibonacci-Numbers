/**
 * Return the total sum of all even fibonacci numbers up to and including
 * the value given to you at `maxFibValue`
 *
 * @param  {Number} maxFibValue
 * @return {Number} sum
 */

function _sumFibs( maxFibValue ) {
  var sum = 0;
  var temp;
  num1 = 0;
  num2 = 1;
  while(num2 < maxFibValue){
    temp = num1; //flipping temp to = num1
    num1 = num2; //flipping num1 to = num2
    num2 += temp; //setting num2 to = num2 + temp
    if(num2 % 2 === 0){ //if num2 is even, set sum to = num2
      sum += num2;
    }
  }
  return sum;
}

// bonus round
function _highestFibonacciNumber (maxFibValue){
  var highest = 0;

  //define your base case, validate your input


  //do your work here

  return highest;
}

/**
 * Do not modify code below.
 * You must be at least level 10 to understand.
 */
module.exports = {
  sumFibs : _sumFibs,
  highestFibonacciNumber : _highestFibonacciNumber
};