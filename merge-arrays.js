const merge = function (a, b) {
  
  const answer = [];
  let i = 0, j = 0, k = 0;
  
  while (i < a.length && j < b.length) {
    answer[k++] = a[i] < b[j] ? a[i++] : b[j++];
  }

  while (i < a.length) {
    answer[k++] = a[i++];
  }

  while (j < b.length) {
    answer[k++] = b[j++];
  }
  
  return answer;
};

console.log(merge([ 4, 5, 6 ], [ 1, 2, 3, 4 ]), "=?", [ 1, 2, 3, 4, 4, 5, 6 ]);
console.log(merge([ 4 ], [ 2, 5, 8 ]), "=?", [ 2, 4, 5, 8 ]);
console.log(merge([ 1, 2, 6 ], []), "=?", [ 1, 2, 6 ]);