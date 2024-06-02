/**
 * @param {string} s
 * @return {string}
 */
// Solution 2 - Sliding window
// Time complexity: O(n)
// Space complexity: O(1)

var reverseVowels = function (s) {
  let vowels = "aeiouAEIOU";
  let newS = [...s];
  let left = 0;
  let right = s.length - 1;

  while (left < right) {
    if (vowels.includes(s[left]) && vowels.includes(s[right])) {
      let temp = newS[left];
      newS[left] = newS[right];
      newS[right] = temp;
      left++;
      right--;
    } else if (!vowels.includes(newS[left])) {
      left++;
    } else if (!vowels.includes(newS[right])) {
      right--;
    }
  }

  return newS.join("");
};

// Solution 1 - Filter vowels
// Time complexity: O(n)
// Space complexity: O(n)

var reverseVowels = function (s) {
  let vowels = ["a", "e", "i", "o", "u", "A", "E", "I", "O", "U"];
  let newS = [...s];
  let sVowels = [...s].filter((a) => vowels.includes(a));

  for (let i = 0; i < s.length; i++) {
    if (vowels.includes(s[i])) {
      let changed = sVowels.pop();
      newS[i] = changed;
      s[i] = changed;
    }
  }

  return newS.join("");
};
