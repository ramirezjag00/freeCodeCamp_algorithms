function booWho(bool) {
  if (typeof bool === "boolean") {
    return true;
  }
  else {
  return false;
  }
}
console.log(booWho(null));//false