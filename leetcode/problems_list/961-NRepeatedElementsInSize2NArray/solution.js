/**
 * @param {number[]} nums
 * @return {number}
 */
// Solution 2 - Map
// Time Complexity: O(n)
// Space Complexity: O(n)

var repeatedNTimes = function (nums) {
  const map = new Map();

  for (let i = 0; i < nums.length; i++) {
    if (map.has(nums[i])) return nums[i];
    map.set(nums[i], 1);
  }
};

// Solution 1 - For
// Time Complexity: O(n)
// Space Complexity: O(1)
var repeatedNTimes = function (nums) {
  let repeated = 0;

  for (let i = 0; i < nums.length; i++) {
    if (nums.indexOf(nums[i]) !== nums.lastIndexOf(nums[i])) repeated = nums[i];
  }

  return repeated;
};
