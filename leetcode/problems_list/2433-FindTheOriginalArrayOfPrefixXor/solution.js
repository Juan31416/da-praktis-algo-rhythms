/**
 * @param {number[]} pref
 * @return {number[]}
 */

// Solution 1
// Time Complexity: O(n)
// Space Complexity: O(n)

var findArray = function (pref) {
  let finalPref = [pref[0]];
  for (let i = 1; i < pref.length; i++) {
    finalPref.push(pref[i] ^ [pref[i - 1]]);
  }

  return finalPref;
};
