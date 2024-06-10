/**
 * @param {number[]} nums
 * @return {number}
 */

// Solution 2 Two For Loops
// Time Complexity: O(n)
// Space Complexity: O(1)
var differenceOfSum = function (nums) {
  let elementSum = 0;
  let digitSum = 0;
  let digits = nums.join("");

  for (let i = 0; i < nums.length; i++) {
    elementSum += nums[i];
  }

  for (let i = 0; i < digits.length; i++) {
    digitSum += Number(digits[i]);
  }

  return elementSum - digitSum;
};

// Solution 1
// Time Complexity: O(n)
// Space Complexity: O(1)

var differenceOfSum = function (nums) {
  let elementSum = 0;
  let digitSum = 0;

  for (let i = 0; i < nums.length; i++) {
    elementSum += nums[i];
    let tmp = nums[i];
    while (tmp !== 0) {
      const digit = tmp % 10;
      digitSum += digit;
      tmp = Math.floor(tmp / 10);
    }
  }

  return elementSum - digitSum;
};
