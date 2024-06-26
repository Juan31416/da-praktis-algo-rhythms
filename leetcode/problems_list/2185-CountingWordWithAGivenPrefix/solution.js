/**
 * @param {string[]} words
 * @param {string} pref
 * @return {number}
 */
// Solution 1 - startsWith
// Time Complexity: O(n)
// Space Complexity: O(1)

var prefixCount = function (words, pref) {
  let count = 0;

  for (let i = 0; i < words.length; i++) {
    if (words[i].startsWith(pref)) count++;
  }

  return count;
};

// Solution 1 - Spread & Slice
// Time Complexity: O(n)
// Space Complexity: O(n)
var prefixCount = function (words, pref) {
  let count = 0;

  for (let i = 0; i < words.length; i++) {
    let tempWord = [...words[i]].slice(0, pref.length).join("");
    if (tempWord === pref) count++;
  }

  return count;
};
