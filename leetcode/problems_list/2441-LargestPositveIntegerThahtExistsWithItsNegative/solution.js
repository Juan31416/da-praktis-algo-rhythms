/**
 * @param {number[]} nums
 * @return {number}
 */
// Solution 2: For & Set
// Time Complexity: O(n)
// Space Complexity: O(n)
var findMaxK = function (nums) {
  let maxK = -1;
  let set = new Set();

  for (let i = 0; i < nums.length; i++) {
    if (set.has(nums[i] * -1))
      maxK = Math.abs(nums[i]) > maxK ? Math.abs(nums[i]) : maxK;
    set.add(nums[i]);
  }

  return maxK;
};

// Solution 1: For & indexOf
// Time Complexity: O(n)
// Space Complexity: O(1)
var findMaxK = function (nums) {
  let maxK = -1;

  for (let i = 0; i < nums.length; i++) {
    if (nums.indexOf(nums[i] * -1) > -1)
      maxK = Math.abs(nums[i]) > maxK ? Math.abs(nums[i]) : maxK;
  }

  return maxK;
};
