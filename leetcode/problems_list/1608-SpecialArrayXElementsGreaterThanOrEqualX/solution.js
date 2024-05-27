/**
 * @param {number[]} nums
 * @return {number}
 */
// Solution 2 - Frequency Counter
// Time Complexity: O(n)
// Space Complexity: O(n)

var specialArray = function (nums) {
  const freq = new Array(nums.length + 1).fill(0);

  for (let i = 0; i < nums.length; i++) {
    freq[Math.min(nums[i], nums.length)]++;
  }

  let count = 0;
  for (let i = nums.length; i >= 0; i--) {
    count += freq[i];
    if (count === i) return i;
  }

  return -1;
};

// Solution 1 - Using While Loop and Reduce
// Time Complexity: O(n^2)
// Space Complexity: O(n)
var specialArray = function (nums) {
  let result = -1;
  let counter = 0;

  while (counter < nums.length + 1) {
    let tempCount = nums.reduce(
      (acc, curr) => acc + (curr >= counter ? 1 : 0),
      0
    );
    if (tempCount === counter) result = tempCount;
    counter++;
  }

  return result;
};
