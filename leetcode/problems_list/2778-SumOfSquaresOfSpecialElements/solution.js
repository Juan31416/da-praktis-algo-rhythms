/**
 * @param {number[]} nums
 * @return {number}
 */
// Solution 1
// Time Complexity: O(n)
// Space Complexity: O(1)
var sumOfSquares = function (nums) {
  let sumTotal = 0;

  for (let i = 0; i < nums.length; i++) {
    if (nums.length % (i + 1) === 0) sumTotal += nums[i] * nums[i];
  }

  return sumTotal;
};
