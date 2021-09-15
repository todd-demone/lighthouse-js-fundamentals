// Ex 5-1 Udacity
// function laugh() {
//   return "hahahahahahahahahaha!";
// }
// console.log(laugh());

// Ex 5-2 Udacity
function laugh(num) {
  let str = ""
  for(let i = 1; i <= num; i++) {
    str += "ha"
  }
  str += "!";
  return str;
}

// console.log(laugh(3));

function isThisWorking(input) {
  console.log("Printing: isThisWorking was called and " + input + " was passed in as an argument.");
  return "Returning: I am returning this string!";
}

// isThisWorking(3);

let a = 1;
// can't access b or c out here; they are protected from the outside world

function x() {
  b = 2;
  console.log("I'm inside x() and a's value is " + a);
  console.log("I'm inside x() and b's value is " + b);
  // console.log("I'm inside x() and c's value is " + c);
  // can't access c in x(); it's protected inside y().
  function y() {
    c = 3;
    console.log("I'm inside y() and a's value is " + a);
    console.log("I'm inside y() and b's value is " + b);
    console.log("I'm inside y() and c's value is " + c);
  }
  y();
}

// x();

// hoisting of functions and variables within function scope

// the following example will log undefined Julia because
// because only the variable DECLARATION is hoisted; the 
// variable ASSIGNMENT is not hoisted.
// sayHi("Julia");

function sayHi(firstName) {
  console.log(greeting + ' ' + firstName);
  var greeting = "Hello";
}

// Quiz 5-3 Udacity - Build a Triangle
function buildTriangle(width) {
  let triangle = '';
  for (let i = 1; i <= width; i++) {
    triangle += makeLine(i);
  }
  return triangle;
}

function makeLine(length) {
  let line = '';
  for (let j = 1; j <= length; j++) {
    line += '* ';
  }
  return line + '\n';
}

// console.log(buildTriangle(10));

// Anonymous inline function expression (AIFE)

// Use this as a callback function when you don't need to reuse 
// the function anywhere.

function movies(messageFunction, theName) {
  messageFunction(theName);
}

// movies(function(movieName){
//   console.log('My favourite movie is ' + movieName);
// }, 'Blade Runner');

const laugh2 = function(numberOfHa) {
  let line = '';
  for (let i = 1; i <= numberOfHa; i++) {
    line += 'ha';
  }
  return line + '!';
}

// console.log(laugh2(3));

const cry = function myCryFunction() {
  return 'boohoo!';
};

// console.log(cry());

function emotions(myString, myFunc) {
  console.log("I am " + myString + ", " + myFunc(2));
}

emotions('happy', 
          function(numberOfHa) {
            let line = '';
            for (let i = 1; i <= numberOfHa; i++) {
              line += 'ha';
            }
            return line + '!';
          }    
);