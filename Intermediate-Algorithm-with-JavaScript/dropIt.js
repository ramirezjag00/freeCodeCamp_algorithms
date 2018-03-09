function dropElements(arr, func) {
  while (!func(arr[0])) {
    //while our func returns "false" on the index 0
    arr.shift();
    //shift left until it is "true"
  }
  return arr;
}

console.log(dropElements([1, 2, 3], function(n) {
  return n < 3;
}));
