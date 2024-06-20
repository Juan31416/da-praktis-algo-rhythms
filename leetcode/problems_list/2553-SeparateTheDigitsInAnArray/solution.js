/**
 * @param {number[]} nums
 * @return {number[]}
 */

// Solution 3 - reduce and template literals
// Time Complexity: O(n)
// Space Complexity: O(n)

var separateDigits = function (nums) {
  const reduce = nums.reduce((acc, curr) => `${acc}${curr}`, "");
  return [...reduce];
};

// Solution 2 - reduce
// Time Complexity: O(n)
// Space Complexity: O(n)

var separateDigits = function (nums) {
  return nums.reduce((acc, num) => {
    acc.push(...num.toString().split(""));
    return acc;
  }, []);
};

// Solution 1 - push digits to array
// Time Complexity: O(n)
// Space Complexity: O(n)

var separateDigits = function (nums) {
  let separatedDigits = [];

  for (let i = 0; i < nums.length; i++) {
    separatedDigits.push(...nums[i].toString().split(""));
  }

  return separatedDigits;
};
