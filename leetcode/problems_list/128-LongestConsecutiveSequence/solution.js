/**
 * @param {number[]} nums
 * @return {number}
 */
var longestConsecutive = function (nums) {
  const numSet = new Set(nums);
  let longest = 0;

  numSet.forEach((e) => {
    if (!numSet.has(e - 1)) {
      let end = e + 1;
      while (numSet.has(end)) {
        end += 1;
        longest = longest > end - e ? longest : end - e;
      }
    }
  });

  return longest === 0 && numSet.size > 0 ? 1 : longest;
};
