/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */

// Solution 2 - Hash Map not working
// Time Complexity: O(n)
// Space Complexity: O(n)

var countPairs = function (nums, k) {
  let count = 0;
  let map = new Map();

  for (let i = 0; i < nums.length; i++) {
    let complement = k - nums[i];
    let complementCount = map.get(complement) || 0;

    if (complementCount > 0) {
      count += complementCount;
    }

    map.set(nums[i], (map.get(nums[i]) || 0) + 1);
  }

  return count;
};

// Solution 1 - Double Loop
// Time Complexity: O(n^2)
// Space Complexity: O(1)

var countPairs = function (nums, k) {
  let count = 0;

  for (let i = 0; i < nums.length; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      if (nums[i] === nums[j] && (i * j) % k === 0) count++;
    }
  }

  return count;
};
