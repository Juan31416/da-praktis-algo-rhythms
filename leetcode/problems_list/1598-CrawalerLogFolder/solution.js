/**
 * @param {string[]} logs
 * @return {number}
 */

// Solution 2 - Stack
// Time Complexity: O(n)
// Space Complexity: O(n)

var minOperations = function (logs) {
  let stack = [];

  for (let i = 0; i < logs.length; i++) {
    let directory = logs[i].slice(0, -1);
    if (directory.includes(".") && directory.length == 2) {
      if (stack.length > 0) stack.pop();
    } else if (!directory.includes(".")) stack.push(directory);
  }

  return stack.length;
};

// Solution 1 - For Loop
// Time Complexity: O(n)
// Space Complexity: O(1)
var minOperations = function (logs) {
  let operations = 0;

  for (let i = 0; i < logs.length; i++) {
    let directory = logs[i].slice(0, -1);
    if (directory.includes(".") && directory.length == 2)
      operations -= operations > 0 ? 1 : 0;
    else if (!directory.includes(".")) operations++;
  }

  return operations;
};
