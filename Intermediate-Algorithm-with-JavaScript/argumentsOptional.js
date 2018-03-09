function addTogether() {
  var par = [].slice.call(arguments);
  if (
    !par.every(function(param) {
      return typeof param === "number";
    })
  ) {
    return undefined;
  }
  if (par.length == 2) {
    return par[0] + par[1];
  } else {
    var firstParam = par[0];
    var another = function(secondParam) {
      return addTogether(firstParam, secondParam);
    };
    return another;
  }

  return par;
}

console.log(addTogether(2, 3));