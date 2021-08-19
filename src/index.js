
exports.min = function min (array) {
  if (Array.isArray(array) && array.length){let i = 0;
    m = array[0];
   while (i < array.length){
     if (m >= array[i]){
       m = array[i]
     }
     i++
   }
   return m;
  }
else {
  return 0
}
}

exports.max = function max (array) {
  if (Array.isArray(array) && array.length){let i = 0;
    m = array[0];
   while (i < array.length){
     if (m <= array[i]){
       m = array[i]
     }
     i++
   }
   return m;}
  else {
    return 0;  
}
}

exports.avg = function avg (array) {
  if (Array.isArray(array) && array.length){let i = 0;
    let m = 0;
    while (i < array.length){
      m = m + array[i]
      i++
    }
    return (m / array.length);}
  else{
    return 0;
  }
}
