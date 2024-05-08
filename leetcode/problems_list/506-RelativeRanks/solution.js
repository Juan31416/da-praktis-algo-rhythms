/*
 * @param {number[]} score
 * @return {string[]}
 */
// SOLUTION 2
// Time Complexity: O(n log n) where n is the length of the score array
// Space Complexity: O(n) where n is the length of the score array
// Same solution, but using a for loop instead of a for of loop, and better memory management.

var findRelativeRanks = function (score) {
  const sortScores = [...score].sort((a, b) => b - a);

  for (let i = 0; i < score.length; i++) {
    if (sortScores.indexOf(score[i]) === 0) score[i] = "Gold Medal";
    else if (sortScores.indexOf(score[i]) === 1) score[i] = "Silver Medal";
    else if (sortScores.indexOf(score[i]) === 2) score[i] = "Bronze Medal";
    else score[i] = String(sortScores.indexOf(score[i]) + 1);
  }

  return score;
};

/**
 * @param {number[]} score
 * @return {string[]}
// SOLUTION 1 

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
 */
