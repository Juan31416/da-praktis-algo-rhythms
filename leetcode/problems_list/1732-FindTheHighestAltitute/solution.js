/**
 * @param {number[]} gain
 * @return {number}
 */

// Solution 2 - Reduce
// Time Complexity: O(n)
// Space Complexity: O(1)

var largestAltitude = function (gain) {
  let highest = 0;
  let curr = 0;
  gain.reduce((acc, curr) => {
    curr += acc;
    if (curr > highest) highest = curr;
    return curr;
  }, 0);

  return highest;
};

// Solution 1 - For Loop
// Time Complexity: O(n)
// Space Complexity: O(1)

var largestAltitude = function (gain) {
  let highest = 0;
  let curr = 0;
  for (let i = 0; i < gain.length; i++) {
    curr += gain[i];
    if (curr > highest) highest = curr;
  }

  return highest;
};
