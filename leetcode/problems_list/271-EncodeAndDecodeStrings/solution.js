/**
 * @param {string[]} strs
 * @returns {string}
 */

// Time Complexity: O(n)
// Space Complexity: O(n)
// where n is the total number of characters in the input list of strings

class Solution {
  encode(strs) {
    let res = "";
    for (let s of strs) {
      res += `${s.length}#${s}`;
    }
    return res;
  }

  /**
   * @param {string} str
   * @returns {string[]}
   */
  decode(str) {
    let res = [];
    let i = 0;

    while (i < str.length) {
      let j = i;
      while (str[j] !== "#") {
        j++;
      }
      let length = parseInt(str.substring(i, j), 10);
      i = j + 1;
      j = i + length;
      res.push(str.substring(i, j));
      i = j;
    }
    return res;
  }
}
