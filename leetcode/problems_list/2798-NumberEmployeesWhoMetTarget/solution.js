/**
 * @param {number[]} hours
 * @param {number} target
 * @return {number}
 */

// Solution 3 - Filter
// Time Complexity: O(n)
// Space Complexity: O(1)
var numberOfEmployeesWhoMetTarget = function (hours, target) {
  return hours.filter((hour) => hour >= target).length;
};

// Solution 2 - Reduce
// Time Complexity: O(n)
// Space Complexity: O(1)
var numberOfEmployeesWhoMetTarget = function (hours, target) {
  return hours.reduce((acc, cur) => (cur >= target ? acc + 1 : acc), 0);
};

// Solution 1 - For Loop
// Time Complexity: O(n)
// Space Complexity: O(1)
var numberOfEmployeesWhoMetTarget = function (hours, target) {
  let targetEmployees = 0;
  for (let i = 0; i < hours.length; i++) {
    if (hours[i] >= target) targetEmployees++;
  }

  return targetEmployees;
};
