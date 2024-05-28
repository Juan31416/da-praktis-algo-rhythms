/**
 * @param {number[]} nums
 * @return {number}
 */

// Solution 1 - Using Or operator
// Time Complexity: O(n)
// Space Complexity: O(1)
var subsetXORSum = function (nums) {
  let subSet = 0;
  for (let i = 0; i < nums.length; i++) {
    subSet |= nums[i];
  }

  return subSet * Math.pow(2, nums.length - 1);
};
