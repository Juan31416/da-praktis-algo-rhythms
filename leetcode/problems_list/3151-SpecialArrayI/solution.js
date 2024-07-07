/**
 * @param {number[]} nums
 * @return {boolean}
 *
 */
// Solution 3 - Using XOR // not working
// Time Complexity: O(n)
// Space Complexity: O(1)

var isArraySpecial = function (nums) {
  let xor = 0;
  for (let i = 0; i < nums.length; i++) {
    xor ^= nums[i];
  }

  return xor === 0;
};

// Solution 2
// Time Complexity: O(n)
// Space Complexity: O(1)
var isArraySpecial = function (nums) {
  for (let i = 1; i < nums.length; i++) {
    if (nums[i] % 2 === nums[i - 1] % 2) return false;
  }

  return true;
};

// Solution 1
// Time Complexity: O(n)
// Space Complexity: O(1)
var isArraySpecial = function (nums) {
  if (nums.lenght === 1) return true;
  let prevParity = nums[0] % 2;
  for (let i = 1; i < nums.length; i++) {
    let currParity = nums[i] % 2;
    if (prevParity === currParity) return false;
    prevParity = currParity;
  }

  return true;
};
