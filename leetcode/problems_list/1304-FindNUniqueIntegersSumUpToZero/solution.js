/**
 * @param {number} n
 * @return {number[]}
 */

// Solution 1 - For loop
// Time complexity: O(n)
// Space complexity: O(n)

var sumZero = function (n) {
  if (n === 1) return [0];

  let uniqueInts = [];

  if (n % 2 === 0) {
    for (let i = 0; i < n / 2; i++) {
      uniqueInts.push(i + 1);
      uniqueInts.push((i + 1) * -1);
    }
  } else {
    uniqueInts.push(0);
    for (let i = 0; i < Math.floor(n / 2); i++) {
      uniqueInts.push(i + 1);
      uniqueInts.push((i + 1) * -1);
    }
  }
  return uniqueInts;
};
