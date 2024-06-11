/**
 * @param {number[]} nums
 * @return {number}
 */
// Solution 2 - Map, find duplicates and XOR
// Time complexity: O(n)
// Space complexity: O(n)

var duplicateNumbersXOR = function (nums) {
  let countMap = new Map();
  for (let num of nums) {
    countMap.set(num, (countMap.get(num) || 0) + 1);
  }
  return [...countMap.entries()].reduce(
    (acc, [num, count]) => (count === 2 ? acc ^ num : acc),
    0
  );
};

// Solution 1 - Sort, iterate and find duplicates
// Time complexity: O(nlogn) + O(n) = O(nlogn)
// Space complexity: O(n)

var duplicateNumbersXOR = function (nums) {
  nums.sort((a, b) => a - b);
  let duplicatedNums = [];

  for (let i = 1; i < nums.length; i++) {
    if (nums[i] === nums[i - 1]) duplicatedNums.push(nums[i]);
  }

  return duplicatedNums.reduce((acc, curr) => acc ^ curr, 0);
};
