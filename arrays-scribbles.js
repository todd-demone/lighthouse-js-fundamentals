const udaciFamily = ['Julia', 'James', 'Todd'];
console.log(udaciFamily);

var prices = [1.23, 48.11, 90.11, 8.50, 9.99, 1.00, 1.10, 67.00];

prices[0] = 3.39;
prices[2] = 66.66;
prices[6] = 77.77;

console.log(prices);

const donuts = ['glazed donut', 'chocolate frosted donut', 'Boston creme donut', 'glazed cruller donut', ];
console.log(donuts);
donuts.splice(1, 1, 'chocolate cruller donut', 'creme de leche donut');
console.log();
console.log(donuts);

const rainbow = ['Red', 'Orange', 'Blackberry', 'Blue'];
console.log(rainbow);
rainbow.splice(2, 1, 'Yellow', 'Green');
console.log(rainbow);
rainbow.splice(4, 1, 'Blue', 'Purple');
console.log(rainbow);

function hasEnoughPlayers(team) {
  if (team.length >= 7) {
    return true;
  }
  return false;
}
const team = ["Oliver Wood", "Angelina Johnson", "Katie Bell", "Alicia Spinnet", "George Weasley", "Fred Weasley", "Harry Potter"];
console.log(hasEnoughPlayers(team));
const word = ['h', 'e', 'l', 'l', 'o'];
word.reverse();
console.log(word);

const nums = [4, 52, 6, 1, 10000];
console.log(nums.sort());

nums.shift();
console.log(nums);

const turnMeIntoAString = ['U', 'd', 'a', 'c', 'i', 't', 'y'];
console.log(turnMeIntoAString.join(''));

for (let i = 0; i < donuts.length; i++) {
  donuts[i] += ' hole';
  donuts[i] = donuts[i].toUpperCase();
}
console.log(donuts);

const donuts2 = ['glazed donut', 'chocolate donut', 'jelly donut'];
donuts2.forEach(function(donut) {
  donut += ' hole';
  donut = donut.toUpperCase();
  console.log(donut);
});

words = ['cat', 'in', 'hat'];
words.forEach(function (word, num, all) {
  console.log("Word " + num + ' in ' + all.toString() + ' is ' + word);
});

var test = [12, 929, 11, 3, 199, 1000, 7, 1, 24, 37, 4, 19, 300, 3775, 299, 36, 209, 148, 169, 299, 6, 109, 20, 58, 139, 59, 3, 1, 139];

test.forEach(function(value, index, arr){
  if (value % 3 === 0) {
    arr[index] += 100;
  }
});

console.log(test);


const donuts3 = ['jelly donut', 'chocolate donut', 'glazed donut'];
const improvedDonuts = donuts3.map(function(donut) {
  donut += " hole";
  donut = donut.toUpperCase();
  return donut;
})
console.log(donuts3);
console.log(improvedDonuts);

var bills = [50.23, 19.12, 34.01, 100.11, 12.15, 9.90, 29.11, 12.99, 10.00, 99.22, 102.20, 100.10, 6.77, 2.22];

const totals = bills.map(function(bill){
  return Number.parseFloat((bill + bill * 0.15).toFixed(2));
});

console.log(bills);
console.log(totals);

const donutbox = [
  ['glazed', 'chocolate sprinkled', 'cinnamon'],
  ['powdered', 'sprinkled', 'glazed cruller'],
  ['chocolate cruller', 'Boston creme', 'creme de leche']
];

for (let row = 0; row < donutbox.length; row++) {
  for (let column = 0; column < donutbox[row].length; column++) {
    console.log(donutbox[row][column]);
  }
}

const numbers = [
  [243, 12, 23, 12, 45, 45, 78, 66, 223, 3],
  [34, 2, 1, 553, 23, 4, 66, 23, 4, 55],
  [67, 56, 45, 553, 44, 55, 5, 428, 452, 3],
  [12, 31, 55, 445, 79, 44, 674, 224, 4, 21],
  [4, 2, 3, 52, 13, 51, 44, 1, 67, 5],
  [5, 65, 4, 5, 5, 6, 5, 43, 23, 4424],
  [74, 532, 6, 7, 35, 17, 89, 43, 43, 66],
  [53, 6, 89, 10, 23, 52, 111, 44, 109, 80],
  [67, 6, 53, 537, 2, 168, 16, 2, 1, 8],
  [76, 7, 9, 6, 3, 73, 77, 100, 56, 100]
];

for (let row = 0; row < numbers.length; row++) {
  for (let column = 0; column < numbers[row].length; column++) {
    if (numbers[row][column] % 2 === 0) {
      numbers[row][column] = 'even';
    } else {
      numbers[row][column] = 'odd';
    }
  }
}

console.log(numbers);