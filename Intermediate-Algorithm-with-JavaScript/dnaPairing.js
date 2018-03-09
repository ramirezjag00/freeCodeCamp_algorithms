function pairElement(str) {
  str = str.toUpperCase().split("");
  var arr = [];
  for (var i = 0; i < str.length; i++) {
    if (str[i] == "A") {
      arr.push(["A", "T"]);
    } else if (str[i] == "T") {
      arr.push(["T", "A"]);
    } else if (str[i] == "G") {
      arr.push(["G", "C"]);
    } else if (str[i] == "C") {
      arr.push(["C", "G"]);
    }
  }
  return arr;
}

console.log(pairElement("GCG"));