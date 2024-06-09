/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */

// Solution 1
// Time Complexity O(nlogn )
// Space Complexity O(1)

var minOperations = function (nums, k) {
  nums.sort((a, b) => a - b);
  let index = 0;
  while (nums[index] < k) {
    index++;
  }

  return index;
};
