/**
 * @param {number[]} nums
 * @return {boolean}
 */

// Solution 2 - Using a Set to store the unique numbers
// Time complexity: O(n)
// Space complexity: O(n)

var divideArray = function (nums) {
  const uniqueNums = new Set(nums);

  for (const num of uniqueNums) {
    if (nums.filter((n) => n === num).length % 2 !== 0) {
      return false;
    }
  }

  return true;
};

// Solution 1 - Using a Map to store the count of each number
// Time complexity: O(n)
// Space complexity: O(n)

var divideArray = function (nums) {
  const mappedNums = new Map();

  for (const num of nums) {
    mappedNums.set(num, (mappedNums.get(num) || 0) + 1);
  }

  const numOfPairs = [...mappedNums.values()].reduce(
    (acc, curr) => Math.floor(curr / 2) + acc,
    0
  );
  return (
    nums.length / 2 === numOfPairs &&
    [...mappedNums.values()].every((curr) => curr % 2 === 0)
  );
};
