/**
 * @param {number[]} nums
 * @return {number}
 */

// Solution 2 - Using Euclidean algorithm
// Time complexity: O(log(n))
// Space complexity: O(1)
var findGCD = function (nums) {
  let maxNumber = Math.max(...nums);
  let minNumber = Math.min(...nums);
  return gcd(maxNumber, minNumber);
};

function gcd(a, b) {
  if (b === 0) return a;
  return gcd(b, a % b);
}

// Solution 1 - Using for loop
// Time complexity: O(n)
// Space complexity: O(1)
var findGCD = function (nums) {
  let maxNumber = Math.max(...nums);
  let minNumber = Math.min(...nums);
  let gdc = 0;
  for (let i = minNumber; i > 0; i--) {
    if (maxNumber % i === 0 && minNumber % i === 0) {
      gdc = i;
      break;
    }
  }

  return gdc;
};
