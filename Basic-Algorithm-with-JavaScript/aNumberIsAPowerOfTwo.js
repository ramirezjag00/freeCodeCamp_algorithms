function pTwo(n) {
	if ((n & (n-1))==0) {
		return n + " is a power of two";
	} else {
		return n + " is not a power of two";
	}
}
pTwo(4);
