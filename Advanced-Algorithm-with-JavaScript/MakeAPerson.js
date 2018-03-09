var Person = function(firstAndLast) {
  var f = firstAndLast.split(" ")[0];
  var l = firstAndLast.split(" ")[1];
  this.getFirstName = function() {
    return f;
  };
  this.getLastName = function() {
    return l;
  };
  this.getFullName = function() {
    return f + " " + l;
  };
  this.setFirstName = function(first) {
    f = first;
  };
  this.setLastName = function(last) {
    l = last;
  };
  this.setFullName = function(firstAndLast) {
    f = firstAndLast.split(" ")[0];
    l = firstAndLast.split(" ")[1];
  };
};

var bob = new Person('Bob Ross');
bob.getFullName();