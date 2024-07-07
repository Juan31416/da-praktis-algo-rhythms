/**
 * @param {number[][]} mat
 * @return {number[]}
 */

// Solution 2
// Time Complexity: O(n^2)
// Space Complexity: O(1)

var rowAndMaximumOnes = function (mat) {
  let max = 0;
  let maxIndex = 0;

  for (let i = 0; i < mat.length; i++) {
    let count = 0;
    for (let j = 0; j < mat[i].length; j++) {
      if (mat[i][j] === 1) {
        count++;
      }
    }
    if (count > max) {
      max = count;
      maxIndex = i;
    }
  }

  return [maxIndex, max];
};

// Solution 1 - For & reduce
// Time Complexity: O(n^2)
// Space Complexity: O(n)

var rowAndMaximumOnes = function (mat) {
  let mapMat = [];
  let greatest = 0;

  for (let i = 0; i < mat.length; i++) {
    let onesCount = mat[i].reduce(
      (acc, curr) => (curr === 1 ? acc + curr : acc),
      0
    );
    greatest = greatest < onesCount ? onesCount : greatest;
    mapMat.push([i, onesCount]);
  }

  return mapMat.filter((curr) => curr[1] === greatest)[0];
};
