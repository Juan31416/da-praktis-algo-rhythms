/**
 * @param {string[]} words
 * @return {string}
 */

// Solution 2 - For & Reverse
// Time Complexity: O(n)
// Space Complexity: O(1)

var firstPalindrome = function (words) {
  for (let i = 0; i < words.length; i++) {
    let tempReversed = [...words[i]].reverse().join("");
    if (tempReversed === words[i]) return words[i];
  }
  return "";
};

// Solution 1 - While & Reverse
// Time Complexity: O(n)
// Space Complexity: O(1)

var firstPalindrome = function (words) {
  let palindromic = "";
  let counter = 0;
  while (counter < words.length && palindromic === "") {
    let tempReversed = [...words[counter]].reverse().join("");
    if (tempReversed === words[counter]) palindromic = words[counter];
    counter++;
  }
  return palindromic;
};
