/**
 * @param {string} a
 * @param {string} b
 * @return {string}
 */
// Solution 2
// Time Complexity: O(n)
// Space Complexity: O(1)

var addBinary = function (a, b) {
  const lenA = a.length - 1;
  const lenB = b.length - 1;

  let carry = 0;
  let result = "";

  for (let i = lenA, j = lenB; i >= 0 || j >= 0; i--, j--) {
    let sum = (Number(a[i]) || 0) + (Number(b[j]) || 0) + carry;
    result = (sum % 2) + result;
    carry = sum > 1 ? 1 : 0;
  }

  return carry === 1 ? "1" + result : result;
};

// // Solution 1
// // Time Complexity: O(n)
// // Space Complexity: O(n)

// var addBinary = function (a, b) {
//   let result = [];
//   let remainder = 0;
//   let shortest = (a.length < b.length ? [...a] : [...b]).reverse();
//   let longest = (a.length < b.length ? [...b] : [...a]).reverse();

//   for (let i = 0; i < longest.length; i++) {
//     let sum = 0;
//     if (shortest[i]) {
//       sum = +shortest[i] + +longest[i] + remainder;
//       result.push(sum % 2);
//       remainder = sum > 1 ? 1 : 0;
//     } else {
//       sum = +longest[i] + remainder;
//       result.push(sum % 2);
//       remainder = sum > 1 ? 1 : 0;
//     }
//   }

//   if (remainder === 1) result.push(1);

//   return result.reverse().join("");
// };
