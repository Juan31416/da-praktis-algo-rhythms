/**
 * @param {number[]} nums
 * @return {number}
 */

// Solution 3 - Using a map to store the count of each number and calculating the identical pairs
// Time complexity: O(n)
// Space complexity: O(n)
var numIdenticalPairs = function (nums) {
  let count = 0;
  let freq = {};

  for (let num of nums) {
    count += freq[num] || 0;
    freq[num] = (freq[num] || 0) + 1;
  }
  return count;
};

// Solution 2 - Using two loops and calculating the identical pairs
// Time complexity: O(n^2)
// Space complexity: O(1)
var numIdenticalPairs = function (nums) {
  let identicalPairs = 0;

  for (let i = 0; i < nums.length; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      if (nums[i] === nums[j]) identicalPairs++;
    }
  }

  return identicalPairs;
};

// Solution 1 - Using a map to store the count of each number and calculating the identical pairs
// Time complexity: O(n)
// Space complexity: O(n)
var numIdenticalPairs = function (nums) {
  let numsMap = new Map();
  let identicalPairs = 0;

  for (let i = 0; i < nums.length; i++) {
    if (!numsMap.has(nums[i])) numsMap.set(nums[i], 0);
    numsMap.set(nums[i], numsMap.get(nums[i]) + 1);
  }

  for (let value of numsMap.values()) {
    identicalPairs += Math.floor((value * (value - 1)) / 2);
  }

  return identicalPairs;
};
