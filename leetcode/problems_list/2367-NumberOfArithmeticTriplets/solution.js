/**
 * @param {number[]} nums
 * @param {number} diff
 * @return {number}
 */

// Solution 2 - Reduce
// Time Complexity O(n)
// Space Complexity O(1)

var arithmeticTriplets = function (nums, diff) {
  return nums.reduce((acc, num) => {
    return acc + (nums.includes(num + diff) && nums.includes(num + diff * 2));
  }, 0);
};

// Solution 1
// Time Complexity O(n)
// Space Complexity O(1)

var arithmeticTriplets = function (nums, diff) {
  let count = 0;
  for (let i = 0; i < nums.length; i++) {
    if (nums.includes(nums[i] + diff) && nums.includes(nums[i] + diff * 2))
      count++;
  }

  return count;
};
