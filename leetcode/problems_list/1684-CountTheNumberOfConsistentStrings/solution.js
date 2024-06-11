/**
 * @param {string} allowed
 * @param {string[]} words
 * @return {number}
 */
// Solution 2 - Loop & Set
// Time Complexity: O(n^2)
// Space Complexity: O(1)

var countConsistentStrings = function (allowed, words) {
  let count = 0;
  const allowedSet = new Set(allowed);

  for (let i = 0; i < words.length; i++) {
    count += [...words[i]].every((curr) => allowedSet.has(curr)) ? 1 : 0;
  }

  return count;
};

// Solution 1 - Loop & every
// Time Complexity: O(n^2)
// Space Complexity: O(1)

var countConsistentStrings = function (allowed, words) {
  let count = 0;

  for (let i = 0; i < words.length; i++) {
    count += [...words[i]].every((curr) => allowed.includes(curr)) ? 1 : 0;
  }

  return count;
};
