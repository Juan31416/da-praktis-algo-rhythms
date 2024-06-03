/**
 * @param {number[]} nums
 * @return {number[]}
 */
// Solution 3 - Map
// Time complexity: O(n)
// Space complexity: O(1)

var runningSum = function (nums) {
  let sum = 0;
  return nums.map((num) => (sum += num));
};

// Solution 2 - Reduce
// Time complexity: O(n)
// Space complexity: O(1)

var runningSum = function (nums) {
  nums.reduce((acc, curr, i) => {
    nums[i] = acc + curr;
    return nums[i];
  }, 0);

  return nums;
};

// Solution 1 - For Loop
// Time complexity: O(n)
// Space complexity: O(1)

var runningSum = function (nums) {
  for (let i = 1; i < nums.length; i++) {
    nums[i] = nums[i] + nums[i - 1];
  }

  return nums;
};
