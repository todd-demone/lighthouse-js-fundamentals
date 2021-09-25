const sumLargestNumbers = function(data) {
let largest, secondLargest;
for (const num of data) {
  if (largest === undefined || num > largest) {
    secondLargest = largest;
    largest = num;
  } else if (secondLargest === undefined || num > secondLargest) {
    secondLargest = num;
  }
}
return largest + secondLargest;
};

console.log(sumLargestNumbers([1, 10]));
console.log(sumLargestNumbers([1, 2, 3]));
console.log(sumLargestNumbers([10, 4, 34, 6, 92, 2]));
