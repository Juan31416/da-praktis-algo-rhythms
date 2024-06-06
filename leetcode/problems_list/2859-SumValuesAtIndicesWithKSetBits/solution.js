/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */

// Solution 2 - Bit manipulation
// Time Complexity: O(n)
// Space Complexity: O(1)

var sumIndicesWithKSetBits = function (nums, k) {
  let sum = 0;
  for (let i = 0; i < nums.length; i++) {
    if (countSetBits(i) === k) {
      sum += nums[i];
    }
  }
  return sum;
};

const countSetBits = (n) => {
  let count = 0;
  while (n) {
    count += n & 1;
    n >>= 1;
  }
  return count;
};

// Solution 1 - String manipulation
// Time Complexity: O(n)
// Space Complexity: O(n)

var sumIndicesWithKSetBits = function (nums, k) {
  let onesCountIdx = nums.map(
    (_, idx) => idx.toString(2).replaceAll("0", "").length
  );
  return nums.reduce(
    (acc, curr, idx) => (onesCountIdx[idx] === k ? acc + curr : acc),
    0
  );
};
