const calculateChange = function(total, cash) {
  let change = cash - total;
  const coins = {};
  const units = [
    {
      name: 'twentyDollar',
      value: 2000
    },
    {
      name: 'tenDollar',
      value: 1000
    },
    {
      name: 'fiveDollar',
      value: 500
    },
    {
      name: 'twoDollar',
      value: 200
    },
    {
      name: 'oneDollar',
      value: 100
    },
    {
      name: 'quarter',
      value: 25
    },
    {
      name: 'dime',
      value: 10
    },
    {
      name: 'nickel',
      value: 5
    },
    {
      name: 'penny',
      value: 1
    },
  ];
  for (const unit of units) {
    const coin = Math.floor(change / unit.value);
    if (coin) {
      coins[unit.name] = coin;
    }
    change = change % unit.value;
  }
  return coins;
};

console.log(calculateChange(1787, 2000));
console.log(calculateChange(2623, 4000));
console.log(calculateChange(501, 1000));