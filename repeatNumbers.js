// repeatNumbers(arr)
// input: two-dimensional array of numbers
// output: String
// the output string is, for each subArray, composed of subArray[0] gets repeated subArray[1] times. 
// eg  repeatNumbers([1, 10]) => 1111111111

function repeatNumbers(arr) {
  // declare / initialize return string
  str = '';
  // loop through top level array
  for (let i = 0; i < arr.length; i++) {
    // subArray - loop through the subArray subArray[1] times 
    for (let j = 0; j < arr[i][1]; j++) {
      // add to return string
      str += arr[i][0];
    }
    // add a comma between value in the return string
    // don't put comma after last value
    if (i !== arr.length - 1) {
      str += ', ';
    }
  }
  return str;
}

console.log(repeatNumbers([[1, 10]]));
console.log(repeatNumbers([[1, 2], [2, 3]]));
console.log(repeatNumbers([[10, 4], [34, 6], [92, 2]]));