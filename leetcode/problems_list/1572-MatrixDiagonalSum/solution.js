/**
 * @param {number[][]} mat
 * @return {number}
 */
// Solution 2
// Time Complexity: O(n)
// Space Complexity: O(1)
var diagonalSum = function (mat) {
  let sum = 0;
  let center = Math.floor(mat.length / 2);

  for (let i = 0; i < mat.length; i++) {
    sum +=
      i === center && mat.length % 2 !== 0
        ? mat[i][i]
        : mat[i][i] + mat[i][mat.length - 1 - i];
  }

  return sum;
};

// Solution 1
// Time Complexity: O(n)
// Space Complexity: O(1)

var diagonalSum = function (mat) {
  let sum = 0;
  let center = Math.floor(mat.length / 2);

  for (let i = 0; i < mat.length; i++) {
    sum += mat[i][i];
    sum += mat[i][mat.length - 1 - i];
  }

  if (mat.length % 2 !== 0) sum -= mat[center][center];

  return sum;
};
