/**
 * @param {number[]} startTime
 * @param {number[]} endTime
 * @param {number} queryTime
 * @return {number}
 */

// Solution 2 - Reduce
// Time Complexity: O(n)
// Space Complexity: O(1)

var busyStudent = function (startTime, endTime, queryTime) {
  return startTime.reduce(
    (acc, _, i) =>
      acc + (queryTime >= startTime[i] && queryTime <= endTime[i] ? 1 : 0),
    0
  );
};

// Solution 1 - For
// Time Complexity: O(n)
// Space Complexity: O(1)

var busyStudent = function (startTime, endTime, queryTime) {
  let busyCount = 0;
  for (let i = 0; i < startTime.length; i++) {
    if (queryTime >= startTime[i] && queryTime <= endTime[i]) busyCount++;
  }

  return busyCount;
};
