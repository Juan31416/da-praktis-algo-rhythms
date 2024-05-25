/**
 * @param {number[]} nums
 * @return {number[]}
 */

// Solution 2 - Using spread operator
// Time complexity: O(1)
// Space complexity: O(n)
var getConcatenation = function (nums) {
  return [...nums, ...nums];
};

// Solution 1 - Using for loop and modulo operator
// Time complexity: O(n)
// Space complexity: O(n)

var getConcatenation = function (nums) {
  let concatenatedArray = [];

  for (let i = 0; i < nums.length * 2; i++) {
    concatenatedArray = [...concatenatedArray, nums[i % nums.length]];
  }

  return concatenatedArray;
};
