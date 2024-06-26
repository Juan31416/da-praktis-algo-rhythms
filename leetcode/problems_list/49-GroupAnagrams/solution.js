/**
 * @param {string[]} strs
 * @return {string[][]}
 */
// Time Complexity: O(n * mlogm) where n is the number of strings and m is the length of the longest string
// Space Complexity: O(n) where n is the number of strings
var groupAnagrams = function (strs) {
  let anagramGroup = new Map(),
    arrayAnagramGroup = [];
  for (const curr of strs) {
    let sortedString = [...curr].sort().join("");
    anagramGroup[sortedString] = anagramGroup.has(sortedString)
      ? [...anagramGroup[sortedString], curr]
      : [curr];
  }
  for (const curr in anagramGroup) {
    arrayAnagramGroup.push(anagramGroup[curr]);
  }

  return arrayAnagramGroup;
};

/** Solition 2 Using Map
 *
 * var groupAnagrams = function (strs) {
 * const anagramGroup = new Map()
 * for (const curr of strs) {
 *  let sortedString = [...curr].sort().join("")
 *  if(!anagramGroup.has(sortedString)){
 *    anagramGroup.set(sortedString, [])
 *  }
 *  anagramGroup.get(sortedString).push(curr)
 * }
 *  return Array.from(anagramGroup.values())
 * };
 */
