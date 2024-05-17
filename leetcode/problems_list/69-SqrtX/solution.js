/**
 * @param {number} x
 * @return {number}
 */

// Solution 2
// Time complexity: O(log(n))
// Space complexity: O(1)

var mySqrt = function (x) {
  let left = 0,
    right = x;

  while (left <= right) {
    const mid = Math.floor((left + right) / 2);
    if (mid * mid <= x && (mid + 1) * (mid + 1) > x) {
      return mid;
    } else if (mid * mid < x) {
      left = mid + 1;
    } else {
      right = mid - 1;
    }
  }
};

// // Solution 1
// // time complexity: O(sqrt(n))
// // space complexity: O(1)

// var mySqrt = function (x) {
//   let i = 1;
//   while (i * i <= x) {
//     if ((i * i) % x == 0) {
//       return i;
//     }
//     i += 1;
//   }

//   return i - 1;
// };
