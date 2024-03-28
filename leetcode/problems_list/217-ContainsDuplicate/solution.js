/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function (nums) {
  let count = {};
  nums.forEach((num) => count[num]);
  return Object.keys(count).length !== nums.length;
};
