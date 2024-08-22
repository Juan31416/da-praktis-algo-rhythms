/**
 * @param {number[]} nums
 * @return {number}
 */

// Solution 2 - Set
// Time Complexity: O(n)
// Space Complexity: O(n)

var minimumOperations = function (nums) {
  const set = new Set(nums);
  set.delete(0);
  return set.size;
};

// Solution 1
// Time Complexity: O(n)
// Space Complexity: O(1)
var minimumOperations = function (nums) {
  let moreThanZero = nums.every((curr) => curr < 0);
  let minVal = Math.min(...[...nums].filter((curr) => curr > 0));
  let count = 0;

  while (!moreThanZero) {
    nums = nums.map((curr) => curr - minVal);
    moreThanZero = nums.every((curr) => curr < 0);
    minVal = Math.min(...[...nums].filter((curr) => curr > 0));
    count++;
  }

  return count - 1;
};
