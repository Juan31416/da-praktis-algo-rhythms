/**
 * @param {number[]} nums
 * @return {number}
 */

// Solution 1 - Count & Move
// Time Complexity: O(n)
// Space Complexity: O(1)

var returnToBoundaryCount = function (nums) {
  let count = 0;
  let move = 0;
  for (let i = 0; i < nums.length; i++) {
    move += nums[i];
    if (move === 0) count++;
  }

  return count;
};
