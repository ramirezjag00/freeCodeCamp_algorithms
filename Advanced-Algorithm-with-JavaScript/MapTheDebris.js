function orbitalPeriod(arr) {
  var GM = 398600.4418;
  var earthRadius = 6367.4447;
  
 for (var i = 0; i < arr.length; i++){ 
  var avgAlt = arr[i].avgAlt;
  
  var T = Math.round(2 * Math.PI * Math.sqrt(Math.pow(earthRadius + avgAlt, 3) / GM));
  
  arr[i].orbitalPeriod = T;
  delete arr[i].avgAlt;
 
 }
  
  return arr;
  
  
}