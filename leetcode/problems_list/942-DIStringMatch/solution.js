/**
 * @param {string} s
 * @return {number[]}
 */

// Solution 1 - For Loop
// Time Complexity: O(n)
// Space Complexity: O(n)

var diStringMatch = function (s) {
  let max = [...s].length;
  let min = 0;
  let permutationArr = [];

  for (let i = 0; i < s.length; i++) {
    if (s[i] === "D") {
      permutationArr.push(max);
      max--;
    }
    if (s[i] === "I") {
      permutationArr.push(min);
      min++;
    }
  }

  permutationArr.push(min);

  return permutationArr;
};
