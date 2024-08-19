/**
 * @param {number[]} nums
 * @return {number}
 */

// Solution 1
// Time Complexity: O(n)
// Space Complexity: O(1)

var minimumOperations = function (nums) {
  let moreThanZero = nums.every((curr) => curr > 0);
  let minVal = Math.min(...nums);
  let count = 0;

  while (moreThanZero) {
    nums = nums.map((curr) => curr - minVal);
    moreThanZero = nums.every((curr) => curr > 0);
    count++;
  }

  return count;
};
