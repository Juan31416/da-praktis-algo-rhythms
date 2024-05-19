/**
 * @param {number} n
 * @return {number}
 */

// Solution 1: Iterative Fibonacci
// Time Complexity: O(n)
// Space Complexity: O(1)

var climbStairs = function (n) {
  if (n == 1) return 1;

  let prev = 1;
  let next = 1;

  for (let i = 0; i < n - 1; i++) {
    let temp = prev;
    prev = next;
    next += temp;
  }

  return next;
};
