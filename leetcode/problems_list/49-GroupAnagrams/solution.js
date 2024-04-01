/**
 * @param {string[]} strs
 * @return {string[][]}
 */
// Time Complexity: O(n * mlogm) where n is the number of strings and m is the length of the longest string
// Space Complexity: O(n) where n is the number of strings
var groupAnagrams = function (strs) {
  let anagramGroup = {},
    arrayAnagramGroup = [];
  for (const curr of strs) {
    let sortedString = [...curr].sort().join("");
    anagramGroup[sortedString] = anagramGroup[sortedString]
      ? [...anagramGroup[sortedString], curr]
      : [curr];
  }
  for (const curr in anagramGroup) {
    arrayAnagramGroup.push(anagramGroup[curr]);
  }

  return arrayAnagramGroup;
};
