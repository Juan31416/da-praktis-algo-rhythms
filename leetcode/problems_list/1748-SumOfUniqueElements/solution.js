/**
 * @param {number[]} nums
 * @return {number}
 */

// Solution 2 - indexOf and lastIndexOf
// Time Complexity: O(n)
// Space Complexity: O(n)

var sumOfUnique = function (nums) {
  return nums.reduce(
    (acc, curr) =>
      nums.indexOf(curr) === nums.lastIndexOf(curr) ? acc + curr : acc,
    0
  );
};

// Solution 1 - Map
// Time Complexity: O(n)
// Space Complexity: O(n)

var sumOfUnique = function (nums) {
  let mappedNums = new Map();
  for (let i = 0; i < nums.length; i++) {
    mappedNums.set(nums[i], (mappedNums.get(nums[i]) || 0) + 1);
  }

  return [...mappedNums.entries()].reduce(
    (acc, curr) => (curr[1] === 1 ? curr[0] + acc : acc),
    0
  );
};
