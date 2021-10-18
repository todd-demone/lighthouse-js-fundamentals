const squareCode = function(message) {
  // console.log(message);
  message = message.split(' ').join('');
  // console.log(message);
  const codedMessageArr = [];
  let codedMessageStr = '';
  const numOfCols = Math.ceil(Math.sqrt(message.length));
  // console.log(numOfCols);
  let arrIndex = 0;
  for (let i = 0; i < message.length; i++) {
    // console.log(codedMessage);
    if (arrIndex === i) {
      codedMessageArr[arrIndex] = message[i];
    } else {
      codedMessageArr[arrIndex] += message[i];
    }
    // console.log(codedMessage);
    if (arrIndex >= numOfCols - 1) {
      arrIndex = 0;  
    } else {
      arrIndex++;
    }
  }
  codedMessageStr = codedMessageArr.join(' ');
  return codedMessageStr;
  
};

console.log(squareCode('chill out'));
console.log(squareCode("feed the dog"));
console.log(squareCode("have a nice day"));
console.log(squareCode("if man was meant to stay on the ground god would have given us roots"));