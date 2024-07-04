/**
 * @param {string[]} operations
 * @return {number}
 */

// Solution 1 - Using stack
// Time complexity: O(n)
// Space complexity: O(n)

var calPoints = function (operations) {
  let scores = [];

  for (let i = 0; i < operations.length; i++) {
    if ("+".includes(operations[i]))
      scores.push(scores[scores.length - 2] + scores[scores.length - 1]);
    if ("D".includes(operations[i])) scores.push(2 * scores[scores.length - 1]);
    if ("C".includes(operations[i])) scores.pop();
    if (!"+DC".includes(operations[i])) scores.push(Number(operations[i]));
  }

  return scores.reduce((acc, curr) => acc + curr, 0);
};
