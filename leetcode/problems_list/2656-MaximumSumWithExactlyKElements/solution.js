/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */

// Solution 2 - Math.max() and reduce()
// Time Complexity: O(n)
// Space Complexity: O(1)

var maximizeSum = function (nums, k) {
  let maxNum = Math.max(...nums);
  return k * maxNum + ((k - 1) * k) / 2;
};

// Solution 1 - Math.max() and for loop
// Time Complexity: O(n)
// Space Complexity: O(1)

var maximizeSum = function (nums, k) {
  let maxNum = Math.max(...nums);
  let sum = 0;

  for (let i = 0; i < k; i++) {
    sum += maxNum + i;
  }

  return sum;
};
