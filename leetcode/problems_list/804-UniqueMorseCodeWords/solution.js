/**
 * @param {string[]} words
 * @return {number}
 */

// Solution 2 - Only Set;
// Time Complexity: O(n^2)
// Space Complexity: O(n)

var uniqueMorseRepresentations = function (words) {
  let morseCode = [
    ".-",
    "-...",
    "-.-.",
    "-..",
    ".",
    "..-.",
    "--.",
    "....",
    "..",
    ".---",
    "-.-",
    ".-..",
    "--",
    "-.",
    "---",
    ".--.",
    "--.-",
    ".-.",
    "...",
    "-",
    "..-",
    "...-",
    ".--",
    "-..-",
    "-.--",
    "--..",
  ];
  let transformedWords = new Set();

  for (let i = 0; i < words.length; i++) {
    let tempTransformed = [...words[i]]
      .map((curr) => morseCode[curr.charCodeAt(0) - 97])
      .join("");
    transformedWords.add(tempTransformed);
  }

  return transformedWords.size;
};

// Solution 1 - Array then set
// Time Complexity: O(n^2)
// Space Complexity: O(n)

var uniqueMorseRepresentations = function (words) {
  let morseCode = [
    ".-",
    "-...",
    "-.-.",
    "-..",
    ".",
    "..-.",
    "--.",
    "....",
    "..",
    ".---",
    "-.-",
    ".-..",
    "--",
    "-.",
    "---",
    ".--.",
    "--.-",
    ".-.",
    "...",
    "-",
    "..-",
    "...-",
    ".--",
    "-..-",
    "-.--",
    "--..",
  ];
  let transformedWords = [];

  for (let i = 0; i < words.length; i++) {
    transformedWords.push(
      [...words[i]].map((curr) => morseCode[curr.charCodeAt(0) - 97]).join("")
    );
  }

  return new Set(transformedWords).size;
};
