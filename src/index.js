exports.min = function min (array) {
    if(!array || !array.length){
        return 0;
    }
    let minimum = array[0];
    for( let i = 1; i <array.length; i++){
        if( minimum > array[i] ){
            minimum = array[i];
        }
    }
    return minimum;
}
  
exports.max = function max (array) {
    if(!array || !array.length){
        return 0;
    }
    let maximum = array[0];
    for( let i = 1; i <array.length; i++){
        if( maximum < array[i] ){
            maximum = array[i];
        }
    }
    return maximum;
  }
  
exports.avg = function avg (array) {
    if(!array || !array.length){
        return 0;
    }
    let average = array[0];
    let sum = array[0];
    for( let i = 1; i <array.length; i++){
        sum += array[i];
    }
    average = sum / array.length;
    return average;
  }


