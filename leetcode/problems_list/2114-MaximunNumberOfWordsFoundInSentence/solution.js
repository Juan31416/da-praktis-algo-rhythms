/**
 * @param {string[]} sentences
 * @return {number}
 */

// Solution 3 - Split and Map
// Time Complexity: O(n)
// Space Complexity: O(1)

var mostWordsFound = function (sentences) {
  return Math.max(...sentences.map((sentence) => sentence.split(" ").length));
};

// Solution 2 - Split and Reduce
// Time Complexity: O(n)
// Space Complexity: O(1)
var mostWordsFound = function (sentences) {
  return sentences.reduce(
    (acc, curr) => Math.max(acc, curr.split(" ").length),
    0
  );
};

// Solution 1 - Counting Spaces
// Time Complexity: O(n)
// Space Complexity: O(1)
var mostWordsFound = function (sentences) {
  let mostWords = 0;

  for (let sentence of sentences) {
    let spaceCount = [...sentence].reduce(
      (acc, curr) => (curr === " " ? acc + 1 : acc),
      0
    );
    mostWords = mostWords > spaceCount ? mostWords : spaceCount;
  }

  return mostWords + 1;
};
