/**
 * @param {number[]} students
 * @param {number[]} sandwiches
 * @return {number}
 */

// Solution 2 : Reduce
// Time Complexity: O(n)
// Space Complexity: O(1)

var countStudents = function (students, sandwiches) {
  let result = students.length;
  let count = students.reduce(
    (acc, curr) => {
      acc[curr]++;
      return acc;
    },
    { 0: 0, 1: 0 }
  );

  for (let s of sandwiches) {
    if (count[s] > 0) {
      result--;
      count[s]--;
    } else break;
  }

  return result;
};
// Solution 1 : While loop
// Time Complexity: O(n)
// Space Complexity: O(1)

var countStudents = function (students, sandwiches) {
  while (students.length > 0 && students.indexOf(sandwiches[0]) != -1) {
    if (students[0] === sandwiches[0]) {
      students.shift();
      sandwiches.shift();
    } else students.push(students.shift());
  }
  return students.length;
};
