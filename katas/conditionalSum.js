const conditionalSum = function(values, condition) {
let sum = 0;
if (condition === 'even') {
  for (const val of values) {
    if (val % 2 === 0) {
      sum += val;
    }
  }
} else {
  for (const val of values) {
    if (val % 2 !== 0) {
      sum += val;
    }
  }
} 
return sum;
};

console.log(conditionalSum([1, 2, 3, 4, 5], "even"));
console.log(conditionalSum([1, 2, 3, 4, 5], "odd"));
console.log(conditionalSum([13, 88, 12, 44, 99], "even"));
console.log(conditionalSum([], "odd"));
