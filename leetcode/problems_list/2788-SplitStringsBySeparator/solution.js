/**
 * @param {string[]} words
 * @param {character} separator
 * @return {string[]}
 */

// Solution 2
// Time Complexity: O(n)
// Space Complexity: O(n)
var splitWordsBySeparator = function (words, separator) {
  let nWords = [];
  for (let i = 0; i < words.length; i++) {
    let curr = words[i].split(separator);
    for (let j = 0; j < curr.length; j++) {
      if (curr[j].trim() !== "") {
        nWords.push(curr[j].trim());
      }
    }
  }
  return nWords;
};

// Solution 1
// Time Complexity: O(n)
// Space Complexity: O(n)
var splitWordsBySeparator = function (words, separator) {
  let nWords = words.map((curr) => curr.split(separator)).flat();
  return nWords.map((curr) => curr.trim()).filter((curr) => curr !== "");
};
