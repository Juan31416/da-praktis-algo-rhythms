/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
// Solution 1
// Time Completxity: O(n)
// Space Complexity: O(1)
var searchInsert = function (nums, target) {
  let targetDiff = nums[nums.length - 1] * 10;
  let position = 0;
  for (const [idx, curr] of nums.entries()) {
    console.log(Math.abs(curr - target) < targetDiff, curr - target);
    if (Math.abs(curr - target) < targetDiff) {
      targetDiff = Math.abs(curr - target);
      console.log("inner", targetDiff, curr - target, position, idx);
      if (targetDiff === 0 || curr - target > 0) position = idx;
      if (curr - target < 0) position = idx + 1;
    }
  }

  return position;
};
