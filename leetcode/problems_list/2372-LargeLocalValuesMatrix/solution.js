/**
 * @param {number[][]} grid
 * @return {number[][]}
 */

// Solution 1
// Time Complexity: O(n^2)
// Space Complexity: O(n^2)

var largestLocal = function (grid) {
  let largestLocalMatrix = [];

  for (let i = 0; i < grid[0].length - 2; i++) {
    let currentMax = [];
    for (let j = 0; j < grid[0].length - 2; j++) {
      currentMax.push(
        Math.max(
          grid[i][j],
          grid[i + 1][j],
          grid[i + 2][j],
          grid[i][j + 1],
          grid[i + 1][j + 1],
          grid[i + 2][j + 1],
          grid[i][j + 2],
          grid[i + 1][j + 2],
          grid[i + 2][j + 2]
        )
      );
    }
    largestLocalMatrix.push(currentMax);
  }
  return largestLocalMatrix;
};
