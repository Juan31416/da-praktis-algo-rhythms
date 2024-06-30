/**
 * @param {number[][]} grid
 * @return {number}
 */

// Solution 2 - Binary Search
// Time Complexity: O(n * log(m))
// Space Complexity: O(1)

var countNegatives = function (grid) {
  let count = 0;
  for (let i = 0; i < grid.length; i++) {
    let left = 0;
    let right = grid[i].length - 1;
    while (left <= right) {
      let mid = Math.floor((left + right) / 2);
      if (grid[i][mid] < 0) {
        count += right - mid + 1;
        right = mid - 1;
      } else {
        left = mid + 1;
      }
    }
  }
  return count;
};

// Solution 1 - New Array & spread operator
// Time Complexity: O(n)
// Space Complexity: O(n)
var countNegatives = function (grid) {
  let oneDimension = [];
  let count = 0;
  for (let item of grid) {
    oneDimension.push(...item);
  }

  for (let i = 0; i < oneDimension.length; i++) {
    count += oneDimension[i] < 0 ? 1 : 0;
  }

  return count;
};
