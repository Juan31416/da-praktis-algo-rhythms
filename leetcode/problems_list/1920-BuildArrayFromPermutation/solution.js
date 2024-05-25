/**
 * @param {number[]} nums
 * @return {number[]}
 */
// Solution 2 - Using map function
// Time complexity: O(n)
// Space complexity: O(n)

var buildArray = function (nums) {
  return nums.map((i) => nums[i]);
};

// Solution 1 - Using for loop and spread operator
// Time complexity: O(n)
// Space complexity: O(n)

var buildArray = function (nums) {
  let permutedArray = [];

  for (let i = 0; i < nums.length; i++) {
    permutedArray = [...permutedArray, nums[nums[i]]];
  }

  return permutedArray;
};
