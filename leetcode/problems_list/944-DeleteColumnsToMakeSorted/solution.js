/**
 * @param {string[]} strs
 * @return {number}
 */

// Solution 2
// Time Complexity: O(n)
// Space Complexity: O(1)

var minDeletionSize = function (strs) {
  let count = 0;
  for (let i = 0; i < strs[0].length; i++) {
    for (let j = 0; j < strs.length - 1; j++) {
      if (strs[j][i] > strs[j + 1][i]) {
        count++;
        break;
      }
    }
  }

  return count;
};

// Solution 1
// Time Complexity: O(n^2)
// Space Complexity: O(n)
var minDeletionSize = function (strs) {
  let strArr = strs.map((a) => [...a]);
  let count = 0;
  for (let i = 0; i < strArr[0].length; i++) {
    for (let j = 0; j < strArr.length - 1; j++) {
      if (strArr[j][i] > strArr[j + 1][i]) {
        count++;
        break;
      }
    }
  }

  return count;
};
