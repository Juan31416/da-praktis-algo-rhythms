/**
 * @param {string[]} word1
 * @param {string[]} word2
 * @return {boolean}
 */
// Solution 1 - Using join() method
// Time complexity is O(n)
// Space complexity is O(1)

var arrayStringsAreEqual = function (word1, word2) {
  return word1.join("") === word2.join("");
};
