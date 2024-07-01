/**
 * @param {string} s
 * @return {number}
 */
// Solution 2 - Using Map
// Time Complexity: O(n)
// Space Complexity: O(n)

var firstUniqChar = function (s) {
  let map = new Map();
  for (let i = 0; i < s.length; i++) {
    if (map.has(s[i])) {
      map.set(s[i], map.get(s[i]) + 1);
    } else {
      map.set(s[i], 1);
    }
  }

  for (let i = 0; i < s.length; i++) {
    if (map.get(s[i]) === 1) return i;
  }

  return -1;
};

// Solution 1 - indexOf and lastIndexOf
// Time Complexity: O(n)
// Space Complexity: O(n)

var firstUniqChar = function (s) {
  let arrS = [...s];
  for (let i = 0; i < s.length; i++) {
    if (arrS.indexOf(s[i]) === arrS.lastIndexOf(s[i])) return i;
  }

  return -1;
};
