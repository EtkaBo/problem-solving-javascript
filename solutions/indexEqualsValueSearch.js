function indexEqualsValueSearch(arr) {
    // your code goes here
    
    var halfNum = Math.floor(arr.length / 2); //2   7 / 2 = Math.floor(3.5) => 3
        //1             2
    if(arr[halfNum] >= halfNum) {
      
      return searchIndexWithSameValue(arr,halfNum,0);
      
    }
    
    return searchIndexWithSameValue(arr,arr.length, halfNum);
  }
  
  function searchIndexWithSameValue(arr,index, finishInt) {
    
    let ar = [];
    for(var i = index; i >= finishInt; i--) {
      if(arr[i] === i) {
        ar.push(i);
      }
    }
    
    if(ar[0] !== undefined) {
      return ar[ar.length - 1];
    }
    return -1;
  }
  
  
  /*
  while ( start < end) {
   let midpoint = Math.floor((start + end) / 2))
   
   if (arr[midpoint] == midpoint) {
    // save the lowest
    // keep going to see if there's even lower number in the array
   } else if (arr[midpoint] > midpoint) {
      // which half of the array do we look at?
      // alter start or end value
   } else if (arr[midpoint] < midpoint) {
      // which half of the array do we look at ?
      // alter start or end value
   }
  }
  */