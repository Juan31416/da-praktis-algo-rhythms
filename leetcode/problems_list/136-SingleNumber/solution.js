/**
 * @param {number[]} nums
 * @return {number}
 */

// Solution 1
// Time Complexity: O(n) - Linear time
// Space Complexity: O(1) - Constant space

var singleNumber = function (nums) {
  let checker = 0;

  for (let i = 0; i < nums.length; i++) {
    checker ^= nums[i];
  }

  return checker;
};
