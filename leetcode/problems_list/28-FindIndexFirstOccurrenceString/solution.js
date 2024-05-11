/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
// Solution 1
// Time Complexity: O(n)
// Space Complexity: O(1)
var strStr = function (haystack, needle) {
  return haystack.indexOf(needle);
};
