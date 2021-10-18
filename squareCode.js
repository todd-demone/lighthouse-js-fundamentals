const squareCode = function(message) {
  // get rid of spaces in message
  message = message.split(' ').join('');
  
  const codedMessage = [];
  
  // try to create a message with an equal number of rows and columns (ie square)
  const numOfCols = Math.ceil(Math.sqrt(message.length));
  
  let arrIndex = 0;
  
  for (let i = 0; i < message.length; i++) {
    // all array items are prepopulated with 'undefined',
    // so you can't use '+=' if it's the first time you're writing
    // to an array item (you get 'undefinedc', for example)
    if (arrIndex === i) {
      codedMessage[arrIndex] = message[i];
    } else {
      codedMessage[arrIndex] += message[i];
    }
    // move to the next array item
    if (arrIndex >= numOfCols - 1) {
      arrIndex = 0;  
    } else {
      arrIndex++;
    }
  }
  // return a string with the columns separated by spaces
  return codedMessage.join(' ');
  
};

console.log(squareCode('chill out'));
console.log(squareCode("feed the dog"));
console.log(squareCode("have a nice day"));
console.log(squareCode("if man was meant to stay on the ground god would have given us roots"));