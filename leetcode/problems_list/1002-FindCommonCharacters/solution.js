/**
 * @param {string[]} words
 * @return {string[]}
 */
// Solution 2
// Time complexity: O(n)
// Space complexity: O(1)

var commonChars = function (words) {
  let commonChars = [];
  let firstWord = words[0];
  for (let i = 0; i < firstWord.length; i++) {
    let char = firstWord[i];
    if (words.every((word) => word.includes(char))) {
      commonChars.push(char);
      words = words.map((word) => word.replace(char, ""));
    }
  }
  return commonChars;
};

// Solution 1 - Double array iteration
// Time complexity: O(n^2)
// Space complexity: O(n)

var commonChars = function (words) {
  let foundCommons = [...words[0]];
  for (let i = 1; i < words.length; i++) {
    let newCommons = [];
    let tempWord = [...words[i]];
    for (let j = 0; j < foundCommons.length; j++) {
      if (tempWord.includes(foundCommons[j])) {
        let charIndex = tempWord.indexOf(foundCommons[j]);
        tempWord.splice(charIndex, 1);
        newCommons.push(foundCommons[j]);
      }
    }
    foundCommons = newCommons;
  }

  return foundCommons;
};
