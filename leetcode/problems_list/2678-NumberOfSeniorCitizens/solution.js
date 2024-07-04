/**
 * @param {string[]} details
 * @return {number}
 */
// Solution 2 - Number
// Time complexity: O(n)
// Space complexity: O(1)
var countSeniors = function (details) {
  let senior = 0;

  for (let i = 0; i < details.length; i++) {
    let age = Number(details[i][11] + details[i][12]);
    if (age > 60) senior++;
  }

  return senior;
};

// Solution 1 - parseInt
// Time complexity: O(n)
// Space complexity: O(1)
var countSeniors = function (details) {
  let senior = 0;

  for (let i = 0; i < details.length; i++) {
    let age = parseInt(details[i][11] + details[i][12]);
    if (age > 60) senior++;
  }

  return senior;
};
