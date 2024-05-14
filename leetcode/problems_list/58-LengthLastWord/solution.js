/**
 * @param {string} s
 * @return {number}
 */

// Solution 1
// Time Complexity: O(n)
// Space Complexity: O(1)

var lengthOfLastWord = function (s) {
  let stringArray = s.trim().split(" ");
  return stringArray[stringArray.length - 1].length;
};
