/**
 * @param {string} s
 * @param {number} k
 * @return {string}
 */

// Solution 2 - One Liner
// Time Complexity O(n)
// Space Complexity O(1)

var truncateSentence = function (s, k) {
  return s.split(" ").slice(0, k).join(" ");
};

// Solution 1
// Time ComplexityO(n)
// Space Complexity O(n)

var truncateSentence = function (s, k) {
  let newS = s.split(" ");
  return newS.slice(0, k).join(" ");
};
