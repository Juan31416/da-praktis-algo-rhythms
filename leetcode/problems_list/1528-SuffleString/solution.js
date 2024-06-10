/**
 * @param {string} s
 * @param {number[]} indices
 * @return {string}
 */

// Solution 2 - empty string
// Time Complexity: O(n)
// Space Complexity: O(n)

var restoreString = function (s, indices) {
  let result = "";
  for (let i = 0; i < s.length; i++) {
    result += s[indices.indexOf(i)];
  }

  return result;
};

// Solution 1
// Time Complexity: O(n)
// Space Complexity: O(n)
var restoreString = function (s, indices) {
  let result = [...s];
  for (let i = 0; i < s.length; i++) {
    result[indices[i]] = s[i];
  }

  return result.join("");
};
