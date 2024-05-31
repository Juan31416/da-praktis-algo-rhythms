/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */

// Solution 2 - Using Two Pointers
// Time Complexity: O(n)
// Space Complexity: O(1)

var countPairs = function (nums, target) {
  nums.sort((a, b) => a - b);
  let count = 0;
  let left = 0;
  let right = nums.length - 1;

  while (left < right) {
    if (nums[left] + nums[right] < target) {
      count += right - left;
      left++;
    } else {
      right--;
    }
  }

  return count;
};

// Solution 1 - Brute Force
// Time Complexity: O(n^2)
// Space Complexity: O(1)

var countPairs = function (nums, target) {
  let count = 0;

  for (let i = 0; i < nums.length; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      if (nums[i] + nums[j] < target) count++;
    }
  }

  return count;
};
