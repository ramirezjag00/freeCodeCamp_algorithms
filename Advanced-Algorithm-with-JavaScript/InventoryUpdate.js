function updateInventory(curArr, newArr) {

	var curObj = {};
	var returnArr = [];
	var arr = [];
	
	curArr.forEach(function(data){
	    curObj[data[1]] = data[0]
	});
	
	
	for (var i in newArr){
		
		if(curObj.hasOwnProperty(newArr[i][1]) === false){
			curObj[newArr[i][1]] = newArr[i][0];
		}

		else {

		curObj[newArr[i][1]] += newArr[i][0];
		}
	}

	for(var x in curObj){
		returnArr.push([curObj[x],x]);
	}

	returnArr.sort(function(a,b){
		return a[1] > b[1];	
	});

	return returnArr;
	
}