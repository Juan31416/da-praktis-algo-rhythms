/**
 * @param {string[][]} items
 * @param {string} ruleKey
 * @param {string} ruleValue
 * @return {number}
 */

// Solution 2
// Time Complexity: O(n)
// Space Complexity: O(1)
var countMatches = function (items, ruleKey, ruleValue) {
  let count = 0;
  let index = 0;

  if (ruleKey === "type") index = 0;
  if (ruleKey === "color") index = 1;
  if (ruleKey === "name") index = 2;

  for (let i = 0; i < items.length; i++) {
    if (items[i][index] === ruleValue) count++;
  }

  return count;
};

// Solution 1
// Time Complexity: O(n)
// Space Complexity: O(1)
var countMatches = function (items, ruleKey, ruleValue) {
  let count = 0;
  for (let i = 0; i < items.length; i++) {
    if (ruleKey === "type") items[i][0] === ruleValue ? count++ : 0;
    if (ruleKey === "color") items[i][1] === ruleValue ? count++ : 0;
    if (ruleKey === "name") items[i][2] === ruleValue ? count++ : 0;
  }

  return count;
};
