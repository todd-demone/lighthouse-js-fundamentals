const moves = ['north', 'north', 'west', 'west', 'north', 'east','north'];

const finalPosition = function (moves) {
  const paradePosition = [0,0];

  for (const move of moves) {
    if (move === 'east') {
      paradePosition[0] += 1;
    } else if (move === 'west') {
      paradePosition[0] -= 1;
    } else if (move === 'north') {
      paradePosition[1] += 1;
    } else if (move === 'south') {
      paradePosition[1] -= 1;
    }
  }
  return paradePosition;
};

console.log(finalPosition(moves));