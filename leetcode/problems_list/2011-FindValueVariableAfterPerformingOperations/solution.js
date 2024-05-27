/**
 * @param {string[]} operations
 * @return {number}
 */

// Solution 1
// Time Complexity: O(n)
// Space Complexity: O(1)

var finalValueAfterOperations = function (operations) {
  let x = 0;

  for (let curr of operations) {
    if (curr === "++X" || curr === "X++") x += 1;
    if (curr === "--X" || curr === "X--") x -= 1;
  }

  return x;
};
