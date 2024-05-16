/**
 * @param {string} a
 * @param {string} b
 * @return {string}
 */

// Solution 1
// Time Complexity: O(n)
// Space Complexity: O(n)

var addBinary = function (a, b) {
  let result = [];
  let remainder = 0;
  let shortest = (a.length < b.length ? [...a] : [...b]).reverse();
  let longest = (a.length < b.length ? [...b] : [...a]).reverse();

  for (let i = 0; i < longest.length; i++) {
    let sum = 0;
    if (shortest[i]) {
      sum = +shortest[i] + +longest[i] + remainder;
      result.push(sum % 2);
      remainder = sum > 1 ? 1 : 0;
    } else {
      sum = +longest[i] + remainder;
      result.push(sum % 2);
      remainder = sum === 2 ? 1 : 0;
    }
  }

  if (remainder === 1) result.push(1);

  return result.reverse().join("");
};
