/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
// Time Complexity: O(nlogn)
// Space Complexity: O(n)
var topKFrequent = function (nums, k) {
  const topElements = new Map();
  for (let num of nums) {
    if (!topElements.has(num)) topElements.set(num, 0);
    topElements.set(num, topElements.get(num) + 1);
  }
  const sortedElements = new Map(
    [...topElements.entries()].sort((a, b) => b[1] - a[1])
  );
  console.log(sortedElements.entries(), sortedElements.keys());
  return Array.from(sortedElements.keys()).slice(0, k);
};

/**
 * Solution using Object
 * Time Complexity: O(nlogn)
 * Space Complexity: O(n)
 * var topKFrequent = function(nums, k) {
 * const topElements = {}
 * for(let num of nums){
 *   topElements[num] = topElements[num] ? topElements[num]+1 : 1
 * }
 * return Object.keys(topElements).sort((a, b) => topElements[b]-topElements[a]).slice(0, k)
 * };
 */
