/**
 * @param {number[]} arr
 * @return {number}
 */

// Solution 4
// Time Complexity: O(n)
// Space Complexity: O(1)

var sumOddLengthSubarrays = function (arr) {
  let sum = 0,
    N = arr.length;
  for (let i = 0; i < arr.length; i++) {
    let total = i * (N - i) + (N - i);
    sum += Math.ceil(total / 2) * arr[i];
  }
  return sum;
};

// Solution 3
// Time Complexity: O(n)
// Space Complexity: O(1)

var sumOddLengthSubarrays = function (arr) {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    let leftOdd = Math.floor((i + 1) / 2);
    let rightOdd = Math.floor((arr.length - i) / 2);
    let leftEven = Math.ceil((i + 1) / 2);
    let rightEven = Math.ceil((arr.length - i) / 2);
    sum += arr[i] * (leftOdd * rightOdd + leftEven * rightEven);
  }
  return sum;
};

// Solution 2 - Prefix Sum
// Time Complexity: O(n)
// Space Complexity: O(1)

var sumOddLengthSubarrays = function (arr) {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    let prefixSum = 0;
    for (let j = i; j < arr.length; j++) {
      prefixSum += arr[j];
      if ((j - i + 1) % 2 === 1) {
        sum += prefixSum;
      }
    }
  }
  return sum;
};

// Solution 1 - Brute Force
// Time Complexity: O(n^3)
// Space Complexity: O(1)

var sumOddLengthSubarrays = function (arr) {
  let sum = 0;
  for (let l = 0; l < arr.length; l += 2) {
    for (let a = 0; a < arr.length - l; a++) {
      for (let e = a; e <= l + a; e++) {
        sum += arr[e];
      }
    }
  }
  return sum;
};
