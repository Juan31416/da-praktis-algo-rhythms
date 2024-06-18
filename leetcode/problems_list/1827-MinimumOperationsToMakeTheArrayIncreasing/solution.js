/**
 * @param {number[]} nums
 * @return {number}
 */

// Solution 2 - reduce
// Time Complexity: O(n)
// Space Complexity: O(1)

var minOperations = function (nums) {
  return nums.reduce((acc, curr, index) => {
    if (index === 0) return acc;
    if (nums[index - 1] >= curr) {
      let diff = nums[index - 1] - curr;
      nums[index] += diff + 1;
      acc += diff + 1;
    }
    return acc;
  }, 0);
};

// Solution 1 - Window Sliding
// Time Complexity: O(n)
// Space Complexity: O(1)

var minOperations = function (nums) {
  let opCount = 0;

  for (let i = 1; i < nums.length; i++) {
    if (nums[i - 1] >= nums[i]) {
      let diff = nums[i - 1] - nums[i];
      nums[i] += diff + 1;
      opCount += diff + 1;
    }
  }

  return opCount;
};
