function sumFibs(num) {
  var fib = [1, 1];
  for (var i = 1; fib[i] <= num; i++) {
    fib.push(fib[i] + fib[i - 1]);
    var sum = 0;
    for (var j = 0; j < fib.length - 1; j++) {
      if (fib[j] % 2 == 1) {
        sum += fib[j];
      }
    }
  }
  return sum;
}
console.log(sumFibs(1));
/* another solution:
function sumFibs(num) {
  var newNum = 0;
  var prevNum = 1;
  var sum = 0;
  for (var i = 1; i <= num; i = newNum) {
    newNum += prevNum;
    prevNum = i;
    if (prevNum % 2 == 1) {
      sum += prevNum;
    }
  }
  return sum;
}
console.log(sumFibs(1));
*/