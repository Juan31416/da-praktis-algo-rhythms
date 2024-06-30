/**
 * @param {number[]} nums
 * @return {number[]}
 */
// Solution 2 - Set
// Time Complexity: O(n)
// Space Complexity: O(n)

var distinctDifferenceArray = function (nums) {
  const set = new Set();
  const res = [];

  for (let num of nums) {
    set.add(num);
    res.push(set.size);
  }

  set.clear();

  for (let i = nums.length - 1; i >= 0; i--) {
    res[i] = res[i] - set.size;
    set.add(nums[i]);
  }

  return res;
};

// Solution 1 - Set & Slice
// Time Complexity: O(n^2)
// Space Complexity: O(n)

var distinctDifferenceArray = function (nums) {
  let result = [];

  for (let i = nums.length - 1; i > -1; i--) {
    let preFix = [...new Set(nums.slice(0, i + 1))].length;
    let posFix = [...new Set(nums.slice(i + 1))].length;
    result.unshift(preFix - posFix);
  }

  return result;
};
