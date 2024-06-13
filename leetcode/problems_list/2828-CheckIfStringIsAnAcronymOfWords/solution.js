/**
 * @param {string[]} words
 * @param {string} s
 * @return {boolean}
 */

// Solution 3 - Map
// Time Complexity: O(n)
// Space Complexity: O(n)

var isAcronym = function (words, s) {
  return words.map((word) => word[0]).join("") === s;
};

// Solution 2 - For Loop
// Time Complexity: O(n)
// Space Complexity: O(n)

var isAcronym = function (words, s) {
  let acronym = "";
  for (let i = 0; i < words.length; i++) {
    acronym += words[i][0];
  }
  return acronym === s;
};

// Solution 1 - Reduce
// Time Complexity: O(n)
// Space Complexity: O(n)

var isAcronym = function (words, s) {
  return words.reduce((acc, curr) => acc + curr[0], "") === s;
};
