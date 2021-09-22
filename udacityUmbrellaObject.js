const umbrella = {
  color: 'pink',
  isOpen: false,
  open: function () {
    if (umbrella.isOpen === true) {
      return 'The umbrella is already opened!';
    } else {
      umbrella.isOpen = true;
      return 'Julia opens the umbrella!';
    }
  },
  close: function() {
    if (!(umbrella.isOpen)) {
      return 'The umbrella is already closed!';
    } else {
      umbrella.isOpen = false;
      return 'Julia closes the umbrella!';
    }
  }
};

console.log(umbrella.isOpen);
console.log(umbrella.open());
console.log(umbrella.isOpen);
console.log(umbrella.close());
console.log(umbrella.isOpen);

const myObj = {
  color: 'orange',
  shape: 'sphere',
  type: 'food',
  eat: function() { return 'yummy' }
};

console.log(myObj.eat());
console.log(myObj.color);

const breakfast = {
  name: 'The Lumberjack',
  price: 9.95,
  ingredients: [
    'eggs',
    'sausage',
    'toast',
    'hashbrowns',
    'pancakes'
  ]
}

console.log(breakfast.price);

var savingsAccount = {
  balance: 1000,
  interestRatePercent: 1,
  deposit: function addMoney(amount) {
    if (amount > 0) {
      savingsAccount.balance += amount;
    }
  },
  withdraw: function removeMoney(amount) {
    var verifyBalance = savingsAccount.balance - amount;
    if (amount > 0 && verifyBalance >= 0) {
      savingsAccount.balance -= amount;
    }
  },
  printAccountSummary: function () {
    return 'Your balance is currently $' + savingsAccount.balance + ' and your interest rate is ' + savingsAccount.interestRatePercent + '%.';
  }
};

console.log(savingsAccount.printAccountSummary());

const facebookProfile = {
  name: 'Todd',
  friends: 0,
  messages: [

  ],
  postMessage: function (message) {
    facebookProfile.messages.push(message);
  },
  deleteMessage: function (index) {
    facebookProfile.messages.splice(index, 1);
  },
  addFriend: function () {
    facebookProfile.friends += 1;
  },
  removeFriend: function () {
    facebookProfile.friends -= 1;
  }
};

facebookProfile.addFriend();
facebookProfile.postMessage('first message!');
facebookProfile.addFriend();
facebookProfile.addFriend();
facebookProfile.postMessage('second message!');
facebookProfile.postMessage('third message!');
console.log(facebookProfile.messages.length);

facebookProfile.deleteMessage(1);
console.log(facebookProfile.messages.length);
console.log(facebookProfile.messages);
console.log(facebookProfile.friends);

const donuts = [
  { type: 'Jelly', cost: 1.22 },
  { type: 'Chocolate', cost: 2.45 },
  { type: 'Cider', cost: 1.59 },
  { type: 'Boston Cream', cost: 5.99 }
];

donuts.forEach(function callbackFn(donut) {
  console.log(donut.type + ' donuts cost $' + donut.cost + ' each');
});