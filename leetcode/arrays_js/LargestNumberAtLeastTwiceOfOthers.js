/**
 * @param {number[]} nums
 * @return {number}
 */

// Solution 1
// Time Complexity: O(n)
// Space Complexity: O(1)

var dominantIndex = function (nums) {
  let max = 0;

  for (let i = 0; i < nums.length; i++) {
    max = nums[i] > nums[max] ? i : max;
  }

  for (let i = 0; i < nums.length; i++) {
    if (nums[max] < nums[i] * 2 && i !== max) max = -1;
  }

  return max;
};
