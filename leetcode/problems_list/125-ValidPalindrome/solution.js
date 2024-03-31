/**
 * @param {string} s
 * @return {boolean}
 */
// Time Complexity: O(n)
// Space Complexity: O(1)
var isPalindrome = function (s) {
  let cleanString = s.toLowerCase().replace(/[^A-Za-z0-9]/g, "");
  let rIndex = cleanString.length - 1;
  for (const curr of cleanString) {
    if (curr !== cleanString[rIndex]) return false;
    rIndex--;
  }
  return true;
};

/**
 * Time Complexity: O(n)
 * Space Complexity: O(n)
 *   let cleanString = s.toLowerCase().replace(/[^A-Za-z0-9]/g, "");
 *   let reverseString = cleanString.split("").reverse().join("");
 *   return cleanString === reverseString;
 */
