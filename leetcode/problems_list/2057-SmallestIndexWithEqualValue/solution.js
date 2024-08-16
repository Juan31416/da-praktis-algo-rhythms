/**
 * @param {number[]} nums
 * @return {number}
 */

// Solution 1
// Time Complexity: O(n)
// Space Complexity: O(1)
var smallestEqual = function (nums) {
  let smMod = nums.length + 1;

  for (let i = 0; i < nums.length; i++) {
    if (i % 10 === nums[i] && i < smMod) {
      smMod = i;
    }
  }

  return smMod === nums.length + 1 ? -1 : smMod;
};
