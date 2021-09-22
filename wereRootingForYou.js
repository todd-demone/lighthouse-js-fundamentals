const judgeVegetable = function (vegetables, metric) {
  let highScore = vegetables[0][metric];
  let winner = vegetables[0].submitter;
  for (const vegetable of vegetables) {
    if (vegetable[metric] > highScore) {
      highScore = vegetable[metric];
      winner = vegetable.submitter;
    }
  }
  return winner;
};

const vegetables = [
  {
    submitter: 'Old Man Franklin',
    redness: 1,
    plumpness: 5
  },
  {
    submitter: 'Sally Tomato-Grower',
    redness: 4,
    plumpness: 8
  },
  {
    submitter: 'Hamid Hamidson',
    redness: 2,
    plumpness: 3
  }
]

const metric = 'redness'

console.log(judgeVegetable(vegetables, metric));