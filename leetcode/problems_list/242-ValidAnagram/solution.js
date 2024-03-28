/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function (s, t) {
  // Hash Table Solution / Time Complexity O(n) / Space Complexity O(n)
  let sWord = {};
  let tWord = {};
  if (s.length !== t.length) return false;
  for (let i = 0; i < s.length; i++) {
    sWord[s[i]] = sWord[s[i]] ? sWord[s[i]] + 1 : 1;
    tWord[t[i]] = tWord[t[i]] ? tWord[t[i]] + 1 : 1;
  }
  for (let key in sWord) {
    if (sWord[key] !== tWord[key]) return false;
  }
  return true;
};
/** Sorted Array Solution / Time Complexity O(nlogn) / Space Complexity O(n)
 * let [sWord, tWord] = [[...s].sort(), [...t].sort()]
 * let anagramCheck = true
 *   if (sWord.length !== tWord.length) return !anagramCheck;
 * for (let i = 0; i < sWord.length; i++) {
 * if (sWord[i] !== tWord[i]) anagramCheck = false;
 * }
 * return anagramCheck;
 */
