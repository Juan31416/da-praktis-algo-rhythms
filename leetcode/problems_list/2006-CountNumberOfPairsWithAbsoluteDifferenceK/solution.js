/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */

// Solution 2 - Using Hash Map
// Time Complexity: O(n)
// Space Complexity: O(n)

var countKDifference = function (nums, k) {
  let count = 0;
  let map = new Map();

  for (let i = 0; i < nums.length; i++) {
    let key1 = nums[i] + k;
    let key2 = nums[i] - k;

    count += map.get(key1) || 0;
    count += map.get(key2) || 0;

    map.set(nums[i], (map.get(nums[i]) || 0) + 1);
  }

  return count;
};

// Solution 1 - Brute Force
// Time Complexity: O(n^2)
// Space Complexity: O(1)

var countKDifference = function (nums, k) {
  let count = 0;

  for (let i = 0; i < nums.length; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      count = Math.abs(nums[i] - nums[j]) === k ? count + 1 : count;
    }
  }

  return count;
};
