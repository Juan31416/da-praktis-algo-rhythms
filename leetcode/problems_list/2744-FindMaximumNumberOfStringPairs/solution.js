/**
 * @param {string[]} words
 * @return {number}
 */

// Solution 4 - Using Map Optimized
// Time Complexity: O(n)
// Space Complexity: O(n)

var maximumNumberOfStringPairs = function (words) {
  let numberMap = new Map();
  let pairs = 0;

  for (let word of words) {
    let reversedWord = [...word].reverse().join("");
    if (numberMap.has(reversedWord)) {
      numberMap.set(reversedWord, numberMap.get(reversedWord) + 1);
      pairs++;
    } else {
      numberMap.set(word, (numberMap.get(word) || 0) + 1);
    }
  }

  return count;
};

// Solution 3 - Using Map
// Time Complexity: O(nlogn)
// Space Complexity: O(n)

var maximumNumberOfStringPairs = function (words) {
  let numberMap = new Map();

  for (let word of words) {
    let sortedWord = [...word].sort().join("");
    if (numberMap.has(sortedWord))
      numberMap.set(sortedWord, numberMap.get(sortedWord) + 1);
    else numberMap.set(sortedWord, 1);
  }

  let count = 0;
  for (let value of numberMap.values()) {
    count += Math.floor(value / 2);
  }

  return count;
};

// Solution 2 - Using Set
// Time Complexity: O(nlogn)
// Space Complexity: O(n)

var maximumNumberOfStringPairs = function (words) {
  let numberSet = new Set();

  for (let word of words) {
    numberSet.add([...word].sort().join(""));
  }

  return words.length - set.size;
};

// Solution 1 - Two For Loops
// Time Complexity: O(n^2)
// Space Complexity: O(1)

var maximumNumberOfStringPairs = function (words) {
  let count = 0;
  for (let i = 0; i < words.length; i++) {
    for (let j = i + 1; j < words.length; j++) {
      if (words[i] === [...words[j]].reverse().join("")) count++;
    }
  }

  return count;
};
