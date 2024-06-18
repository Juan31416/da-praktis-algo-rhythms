/**
 * @param {number[]} batteryPercentages
 * @return {number}
 */

// Solution 2 - Single loop
// Time complexity: O(n)
// Space complexity: O(1)

var countTestedDevices = function (batteryPercentages) {
  let arrSize = batteryPercentages.length;
  let testedCount = 0;
  let accDec = 0;

  for (let i = 0; i < arrSize; i++) {
    if (batteryPercentages[i] - accDec > 0) {
      testedCount++;
      accDec++;
    }
  }

  return testedCount;
};

// Solution 1 - Double loop
// Time complexity: O(n^2)
// Space complexity: O(1)

var countTestedDevices = function (batteryPercentages) {
  let testedCount = 0;
  let arrSize = batteryPercentages.length;

  for (let i = 0; i < arrSize; i++) {
    if (batteryPercentages[i] > 0) {
      testedCount++;
      for (j = i + 1; j < arrSize; j++) {
        if (batteryPercentages[j] - 1 > -1) {
          batteryPercentages[j] -= 1;
        }
      }
    }
  }

  return testedCount;
};
