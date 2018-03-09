function findElement(arr, func) {
  var num = arr.filter(func);
  if (num.length > 1) {
    return num[0];
  } else {
    return undefined;
  }
}

console.log(findElement([1, 2, 3, 4], function(num) {
  return num % 2 === 0;
}));