/**
 * @param {number[]} arr
 * @return {boolean}
 */

// Solution 2 - While Loop
// Time Complexity: O(n)
// Space Complexity: O(1)

var threeConsecutiveOdds = function (arr) {
  let oddCount = 0;
  let i = 0;
  while (i < arr.length) {
    if (arr[i] % 2 !== 0) {
      oddCount++;
      if (oddCount === 3) return true;
    } else {
      oddCount = 0;
    }
    i++;
  }

  return false;
};

// Solution 1 - For Loop
// Time Complexity: O(n)
// Space Complexity: O(1)

var threeConsecutiveOdds = function (arr) {
  let oddCount = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 !== 0) {
      oddCount++;
      if (oddCount === 3) return true;
    } else {
      oddCount = 0;
    }
  }

  return false;
};
