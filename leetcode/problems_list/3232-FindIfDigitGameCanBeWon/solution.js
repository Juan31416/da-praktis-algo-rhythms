/**
 * @param {number[]} nums
 * @return {boolean}
 */

// Solution 2
// Time Complexity: O(nlogn)
// Space Complexity: O(1)

var canAliceWin = function (nums) {
  nums.sort((a, b) => a - b);
  let singleSum = 0;
  let doubleSum = 0;

  for (let i = nums.length - 1; i >= 0; i--) {
    if (nums[i] < 10) {
      singleSum += nums[i];
    } else {
      doubleSum += nums[i];
    }
  }

  return singleSum > doubleSum || doubleSum > singleSum;
};

// Solution 1
// Time Complexity: O(n)
// Space Complexity: O(1)

var canAliceWin = function (nums) {
  const singleSum = nums.reduce(
    (acc, curr) => (curr < 10 ? acc + curr : acc),
    0
  );
  const doubleSum = nums.reduce(
    (acc, curr) => (curr > 9 ? acc + curr : acc),
    0
  );

  return singleSum > doubleSum || doubleSum > singleSum;
};
