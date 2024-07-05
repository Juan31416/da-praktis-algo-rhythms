/**
 * @param {number[][]} items1
 * @param {number[][]} items2
 * @return {number[][]}
 */

// Solution 2 - Object
// Time Complexity: O(n)
// Space Complexity: O(n)

var mergeSimilarItems = function (items1, items2) {
  let mappedItems = {};
  items1.push(...items2);

  for (let i = 0; i < items1.length; i++) {
    mappedItems[items1[i][0]] = (mappedItems[items1[i][0]] || 0) + items1[i][1];
  }

  return Object.entries(mappedItems).sort((a, b) => a[0] - b[0]);
};

// Solution 1 - Map
// Time Complexity: O(n)
// Space Complexity: O(n)
var mergeSimilarItems = function (items1, items2) {
  let mappedItems = new Map();
  items1.push(...items2);

  for (let i = 0; i < items1.length; i++) {
    mappedItems.set(
      items1[i][0],
      (mappedItems.get(items1[i][0]) || 0) + items1[i][1]
    );
  }

  return Array.from(mappedItems.entries()).sort((a, b) => a[0] - b[0]);
};
