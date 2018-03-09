function uniteUnique(arr) {
/*  a faster/shorter way of doing this is by using ES6:
    return [...arguments]
    .reduce((acc, cur) => acc.concat(cur), [])
    .filter((v, i, a) => a.indexOf(v) == i); 
*/
  arr = Array.from(arguments).reduce(function(a, b) {
    return a.concat(b);
  }, []);
  arr = arr.filter(function(elem, pos) {
    return arr.indexOf(elem) == pos;
  });
  return arr;
}
console.log(uniteUnique([1, 3, 2], [5, 2, 1, 4], [2, 1])); //[1,3,2,5,4]