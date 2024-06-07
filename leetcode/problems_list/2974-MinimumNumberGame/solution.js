/**
 * @param {number[]} nums
 * @return {number[]}
 */

// Solution 1
// Time Complexity: O(nlogn)
// Space Complexity: O(1)

var numberGame = function (nums) {
  nums = nums.sort((a, b) => a - b);

  for (let i = 0; i < nums.length; i += 2) {
    let temp = nums[i];
    nums[i] = nums[i + 1];
    nums[i + 1] = temp;
  }

  return nums;
};
