/**
 * @param {string[]} strs
 * @return {string}
 */
// FIRST SOLUTION
// Time complexity: O(n * m) where n is the number of strings and m is the length of the shortest string
// Space complexity: O(m) where m is the length of the shortest string

var longestCommonPrefix = function (strs) {
  let longestPrefix = [...strs[0]];

  for (let i = 1; i < strs.length; i++) {
    for (const [idx, charL] of longestPrefix.entries()) {
      if (charL !== strs[i][idx]) {
        longestPrefix.splice(idx);
        break;
      }
    }
  }

  return longestPrefix.join("");
};
