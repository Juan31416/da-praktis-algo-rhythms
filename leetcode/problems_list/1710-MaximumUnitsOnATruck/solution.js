/**
 * @param {number[][]} boxTypes
 * @param {number} truckSize
 * @return {number}
 */
// Solution 2
// Time complexity: O(n)
// Space complexity: O(n)

var maximumUnits = function (boxTypes, truckSize) {
  const buckets = new Array(1001).fill(0);
  let totalUnits = 0;

  for (const [boxes, unitsPerBox] of boxTypes) {
    buckets[unitsPerBox] += boxes;
  }

  for (let i = 1000; i >= 0; i--) {
    if (buckets[i] === 0) continue;

    const boxesToLoad = Math.min(buckets[i], truckSize);
    totalUnits += boxesToLoad * i;
    truckSize -= boxesToLoad;

    if (truckSize === 0) break;
  }

  return totalUnits;
};

// Solution 1
// Time complexity: O(nlogn)
// Space complexity: O(1)

var maximumUnits = function (boxTypes, truckSize) {
  boxTypes.sort((a, b) => b[1] - a[1]); // Sort by units per box (descending)
  let totalUnits = 0;
  let remainingSpace = truckSize;

  for (const [boxes, unitsPerBox] of boxTypes) {
    if (remainingSpace <= 0) break; // No more space on the truck

    const boxesToLoad = Math.min(boxes, remainingSpace); // Take as many as we can
    totalUnits += boxesToLoad * unitsPerBox;
    remainingSpace -= boxesToLoad;
  }

  return totalUnits;
};
