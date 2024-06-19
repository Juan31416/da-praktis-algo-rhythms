/**
 * @param {number[]} hours
 * @return {number}
 */

// Solution 2 - Hash map
// Time complexity: O(n)
// Space complexity: O(n)

var countCompleteDayPairs = function (hours) {
  let count = 0;
  let map = {};

  for (let i = 0; i < hours.length; i++) {
    let remainder = hours[i] % 24;
    if (map[24 - remainder]) {
      count += map[24 - remainder];
    }

    map[remainder] = map[remainder] ? map[remainder] + 1 : 1;
  }

  return count;
};

// Solution 1 - Double loop
// Time complexity: O(n^2)
// Space complexity: O(1)
var countCompleteDayPairs = function (hours) {
  let count = 0;

  for (let i = 0; i < hours.length; i++) {
    for (let j = i + 1; j < hours.length; j++) {
      if ((hours[i] + hours[j]) % 24 === 0) count++;
    }
  }

  return count;
};
