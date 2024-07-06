/**
 * @param {number} n
 * @param {number} time
 * @return {number}
 */
// Solution 3
// Time Complexity: O(n)
// Space Complexity: O(1)
var passThePillow = function (n, time) {
  let count = 1;
  let direction = 1;
  for (let i = 0; i < time; i++) {
    if (count === 1) direction = 1;
    if (count === n) direction = -1;
    count = direction === 1 ? count + 1 : count - 1;
  }
  return count;
};

// Solution 2
// Time Complexity: O(n)
// Space Complexity: O(1)

var passThePillow = function (n, time) {
  time %= (n - 1) * 2;

  if (time > n - 1) {
    time -= n - 1;
    return n - time;
  } else {
    return time + 1;
  }
};

// Solution 1 - Array of People
// Time Complexity: O(n)
// Space Complexity: O(n)

var passThePillow = function (n, time) {
  let peopleOrder = [...Array(n).keys()].map((i) => i + 1);
  peopleOrder.push(...peopleOrder.slice(1, peopleOrder.length - 1).reverse());
  let idx = time < peopleOrder.length ? time : time % peopleOrder.length;
  return peopleOrder[idx];
};
