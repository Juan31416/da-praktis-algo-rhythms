/**
 * @param {number[]} nums
 * @return {number}
 */

// Solution 3: Boyer-Moore Voting Algorithm w/ Validation
// Time complexity: O(n)
// Space complexity: O(1)

/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function (nums) {
  // Counting
  let majority = nums[0];
  let votes = 1;

  // Verification
  let majorityCount = 0;

  for (let curr of nums) {
    votes = curr === majority ? votes + 1 : votes - 1;
    if (votes === 0) {
      majority = curr;
      votes = 1;
    }
  }

  majorityCount = nums.reduce(
    (acc, curr) => (curr == majority ? (acc += 1) : acc),
    0
  );
  return majorityCount > nums.length / 2 ? majority : null;
};

// Solution 2: Boyer-Moore Voting Algorithm
// Time complexity: O(n)
// Space complexity: O(1)

var majorityElement = function (nums) {
  let count = 0;
  let candidate = null;

  for (let curr of nums) {
    if (count === 0) candidate = curr;
    count += curr === candidate ? 1 : -1;
  }

  return candidate;
};

// Solution 1: Counting w/ Map
// Time complexity: O(n)
// Space complexity: O(n)

var majorityElement = function (nums) {
  let numCount = new Map();

  for (let curr of nums) {
    if (!numCount.has(curr)) numCount.set(curr, 0);
    numCount.set(curr, numCount.get(curr) + 1);
  }

  return [...numCount.entries()].reduce((curr, next) =>
    curr[1] > next[1] ? curr : next
  )[0];
};
