function sortDesc() {
	for (var i = 0; i<arguments.length-1;i++){
	for (var j = 0; j<arguments.length-1;j++){
	if(arguments[j]<arguments[j+1]){
	var temp = arguments[j+1];
	arguments[j+1] = arguments[j];
	arguments[j] = temp;
	}
	}
	}
	return arguments;
}
console.log(sortDesc(1, 5, 3 ,4, 2));
