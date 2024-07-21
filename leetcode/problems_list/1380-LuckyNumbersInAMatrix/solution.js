/**
 * @param {number[][]} matrix
 * @return {number[]}
 */
// Solution 2
// Time Complexity: O(n*m)
// Space Complexity: O(n+m)

var luckyNumbers = function (matrix) {
  for (let i = 0; i < matrix.length; i++) {
    let min = Math.min(...matrix[i]);
    index = matrix[i].indexOf(min);

    if (matrix.every((arr) => arr[index] <= min)) {
      return [min];
    }
  }
  return [];
};

// Solution 1
// Time Complexity: O(n*m)
// Space Complexity: O(n+m)
var luckyNumbers = function (matrix) {
  let luckyNumber = [];
  let newMat = matrix.reduce(
    (prev, next) => next.map((item, i) => (prev[i] || []).concat(next[i])),
    []
  );

  for (let i = 0; i < matrix.length; i++) {
    let min = Math.min(...matrix[i]);
    for (let j = 0; j < matrix[0].length; j++) {
      if (matrix[i][j] === min && min === Math.max(...newMat[j]))
        luckyNumber[0] = min;
    }
  }

  return luckyNumber;
};
