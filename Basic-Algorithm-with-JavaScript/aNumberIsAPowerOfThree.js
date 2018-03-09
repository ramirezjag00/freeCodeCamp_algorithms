function powerOfThree(num) {
  var x = num;
  while (x % 3 == 0) {
    x /= 3;
  }
  if (x == 1) {
    return num + " is a power of 3";
  } else {
    return num + " is not a power of 3";
  }
}
console.log(powerOfThree(27));
