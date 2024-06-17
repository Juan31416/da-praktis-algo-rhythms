/**
 * @param {number[]} arr
 * @param {number} a
 * @param {number} b
 * @param {number} c
 * @return {number}
 */

// Solution 2 - Using 3 for loops - Optimized
// Time complexity: O(n^2)
// Space complexity: O(1)

var countGoodTriplets = function (arr, a, b, c) {
  let count = 0;
  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      let conditionOne = Math.abs(arr[i] - arr[j]);
      if (conditionOne > a) continue;
      for (let k = j + 1; k < arr.length; k++) {
        let conditionTwo = Math.abs(arr[j] - arr[k]);
        let conditionThr = Math.abs(arr[i] - arr[k]);
        if (conditionTwo <= b && conditionThr <= c) count++;
      }
    }
  }

  return count;
};

// Solution 1 - Using 3 for loops
// Time complexity: O(n^3)
// Space complexity: O(1)

var countGoodTriplets = function (arr, a, b, c) {
  let count = 0;
  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      for (let k = j + 1; k < arr.length; k++) {
        let conditionOne = Math.abs(arr[i] - arr[j]);
        let conditionTwo = Math.abs(arr[j] - arr[k]);
        let conditionThr = Math.abs(arr[i] - arr[k]);
        if (conditionOne <= a && conditionTwo <= b && conditionThr <= c)
          count++;
      }
    }
  }

  return count;
};
