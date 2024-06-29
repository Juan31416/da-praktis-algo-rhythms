/**
 * @param {number[]} nums
 * @return {number}
 */
// Solution 2 - For Loop
// Time Complexity - O(n)
// Space Complexity - O(1)

var minimumOperations = function (nums) {
  let count = 0;
  for (let i = 0; i < nums.length; i++) {
    count += Math.min(nums[i] % 3, 3 - (nums[i] % 3));
  }
  return count;
};

// Solution 1 - Reduce
// Time Complexity - O(n)
// Space Complexity - O(1)

var minimumOperations = function (nums) {
  return nums.reduce(
    (acc, curr) => acc + Math.min(curr % 3, 3 - (curr % 3)),
    0
  );
};
