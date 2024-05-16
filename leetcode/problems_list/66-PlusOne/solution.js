/**
 * @param {number[]} digits
 * @return {number[]}
 */

// Solution 1
// Time complexity: O(n)
// Space complexity: O(1)
var plusOne = function (digits) {
  let lastIdx = digits.length - 1;
  let reminder = 1;

  if (digits[lastIdx] + 1 < 10) {
    digits[lastIdx] += 1;
  } else {
    while (reminder === 1) {
      if (digits[lastIdx] + 1 < 10) {
        digits[lastIdx] += 1;
        reminder = 0;
      } else if (lastIdx < 0) {
        digits.unshift(1);
        reminder = 0;
      } else {
        digits[lastIdx] = 0;
        lastIdx -= 1;
      }
    }
  }

  return digits;
};
