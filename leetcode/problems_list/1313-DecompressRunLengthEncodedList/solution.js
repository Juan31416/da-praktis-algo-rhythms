/**
 * @param {number[]} nums
 * @return {number[]}
 */

// Solution 3 - Recursive
// Time Complexity: O(n)
// Space Complexity: O(n)

var decompressRLElist = function (nums) {
  if (nums.length === 0) return [];

  return [...Array(nums[0]).fill(nums[1]), ...decompressRLElist(nums.slice(2))];
};

// Solution 2 - For Loop
// Time Complexity: O(n)
// Space Complexity: O(n)

var decompressRLElist = function (nums) {
  let result = [];

  for (let i = 0; 2 * i < nums.length && 2 * i + 1 < nums.length; i++) {
    result = [...result, ...Array(nums[2 * i]).fill(nums[2 * i + 1])];
  }

  return result;
};

// Solution 1 - While Loop
// Time Complexity: O(n)
// Space Complexity: O(n)

var decompressRLElist = function (nums) {
  let result = [];
  let index = 0;

  while (2 * index < nums.length && 2 * index + 1 < nums.length) {
    result = [...result, ...Array(nums[2 * index]).fill(nums[2 * index + 1])];
    index++;
  }

  return result;
};
