/**
 * @param {string[]} words
 * @param {character} x
 * @return {number[]}
 */

// Solution 2 - Using includes method
// Time Complexity: O(n)
// Space Complexity: O(n)
var findWordsContaining = function (words, x) {
  let wordsIndexes = [];

  for (let i = 0; i < words.length; i++) {
    if (words[i].includes(x)) wordsIndexes.push(i);
  }

  return wordsIndexes;
};

// Solution 1 - Using indexOf method
// Time Complexity: O(n)
// Space Complexity: O(n)

var findWordsContaining = function (words, x) {
  let wordsIndexes = [];

  for (let i = 0; i < words.length; i++) {
    if (words[i].indexOf(x) >= 0) wordsIndexes.push(i);
  }

  return wordsIndexes;
};
