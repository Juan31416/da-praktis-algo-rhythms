/**
 * @param {number[]} score
 * @return {string[]}
 */

// Time Complexity: O(n log n) where n is the length of the score array
// Space Complexity: O(n) where n is the length of the score array
var findRelativeRanks = function (score) {
  let sortScores = [...score].sort((a, b) => b - a);
  let results = [];

  for (let curr of score) {
    if (sortScores.indexOf(curr) === 0) results.push("Gold Medal");
    if (sortScores.indexOf(curr) === 1) results.push("Silver Medal");
    if (sortScores.indexOf(curr) === 2) results.push("Bronze Medal");
    if (sortScores.indexOf(curr) > 2)
      results.push(String(sortScores.indexOf(curr) + 1));
  }

  return results;
};
