function spinalCase(str) {
  str = str.replace(/([a-z])([A-Z])/g, "$1 $2").toLowerCase();
  return str.replace(/\s|_/g, "-");
}
console.log(spinalCase("This Is Spinal Tap"));
//examples to try
//("thisIsSpinalTap")
//("The_Andy_Griffith_Show")
//("Teletubbies say Eh-oh")
//("AllThe-small Things")