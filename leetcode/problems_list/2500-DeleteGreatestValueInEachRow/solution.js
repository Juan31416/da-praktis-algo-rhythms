/**
 * @param {number[][]} grid
 * @return {number}
 */

// Solution 1 - For Loop
// Time Complexity: O(n^2)
// Space Complexity: O(n)

var deleteGreatestValue = function (grid) {
  let greatestSum = 0;

  for (let i = 0; i < grid.length; i++) {
    grid[i].sort((a, b) => a - b);
  }

  for (let i = grid[0].length - 1; i > -1; i--) {
    let maxValues = [];
    for (let j = 0; j < grid.length; j++) {
      maxValues.push(grid[j][i]);
    }
    greatestSum += Math.max(...maxValues);
  }

  return greatestSum;
};
