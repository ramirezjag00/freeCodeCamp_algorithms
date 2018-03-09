function pairwise(arr, arg) {
  var sum=0;
  var array=[];
  for(var  i=0;i<arr.length;i++){
    for(j=0;j<arr.length;j++){
      if(arr[i]+arr[j]===arg && array.indexOf(i)==-1 && array.indexOf(j)==-1 && i!=j){
        array.push(i,j);
        sum+=(i+j);
      }
    }
  }
  return sum;
}