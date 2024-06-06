/**
 * @param {number[]} nums
 * @param {number[]} index
 * @return {number[]}
 */

// Solution 2 - Using for loop
// Time complexity: O(n^2)
// Space complexity: O(n)

var createTargetArray = function (nums, index) {
  let targetArray = [];

  for (let i = 0; i < nums.length; i++) {
    if (index[i] === targetArray.length) {
      targetArray.push(nums[i]);
    } else {
      targetArray = [
        ...targetArray.slice(0, index[i]),
        nums[i],
        ...targetArray.slice(index[i]),
      ];
    }
  }

  return targetArray;
};

// Solution 1 - Using splice method
// Time complexity: O(n^2)
// Space complexity: O(n)

var createTargetArray = function (nums, index) {
  let targetArray = [];

  for (let i = 0; i < nums.length; i++) {
    targetArray.splice(index[i], 0, nums[i]);
  }

  return targetArray;
};
