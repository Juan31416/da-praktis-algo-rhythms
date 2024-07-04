/**
 * @param {number[]} nums
 * @return {number}
 */
// Solution 2 - Sorting
// Time Complexity: O(nlogn)
// Space Complexity: O(1)

var findNonMinOrMax = function (nums) {
  nums.sort((a, b) => a - b);

  for (let i = 1; i < nums.length - 1; i++) {
    if (nums[i] !== nums[i - 1] && nums[i] !== nums[i + 1]) {
      return nums[i];
    }
  }

  return -1;
};

// Solution 1 - Min and Max
// Time Complexity: O(n)
// Space Complexity: O(1)

var findNonMinOrMax = function (nums) {
  let maxVal = Math.max(...nums);
  let minVal = Math.min(...nums);

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] !== minVal && nums[i] !== maxVal) return nums[i];
  }

  return -1;
};
