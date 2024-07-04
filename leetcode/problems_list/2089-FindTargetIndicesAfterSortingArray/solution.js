/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */

// Solution 1 - Sorting
// Time Complexity: O(nlogn)
// Space Complexity: O(1)
var targetIndices = function (nums, target) {
  nums.sort((a, b) => a - b);
  let targetIdx = [];

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] === target) targetIdx.push(i);
  }

  return targetIdx;
};
