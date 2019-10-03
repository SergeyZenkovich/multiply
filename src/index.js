module.exports = function multiply(first, second) {
  var number1 = BigInt(first);
  var number2 = BigInt(second);
  var x  = BigInt(number1*number2);

  var str = x+'';
  var result  = str.slice(0, str.length);
  return result;
}
