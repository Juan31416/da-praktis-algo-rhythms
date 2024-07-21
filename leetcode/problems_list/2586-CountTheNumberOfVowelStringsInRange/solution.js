/**
 * @param {string[]} words
 * @param {number} left
 * @param {number} right
 * @return {number}
 */
// Solution 2
// Time Complexity: O(n)
//  Space Complexity: O(1)

var vowelStrings = function (words, left, right) {
  const vowels = "aeiou";
  let count = 0;

  for (let i = left; i < right + 1; i++) {
    if (
      vowels.includes(words[i][0]) &&
      vowels.includes(words[i][words[i].length - 1])
    )
      count++;
  }

  return count;
};

// Solution 1
// Time Complexity: O(n)
//  Space Complexity: O(1)
var vowelStrings = function (words, left, right) {
  const vowels = "aeiou";
  let count = 0;

  for (let i = left; i < right + 1; i++) {
    if (
      vowels.includes(words[i][0]) &&
      vowels.includes(words[i][words[i].length - 1])
    )
      count++;
  }

  return count;
};
