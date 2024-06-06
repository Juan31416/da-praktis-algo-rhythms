/**
 * @param {number[]} encoded
 * @param {number} first
 * @return {number[]}
 */

// Solution 4 - Bitwise XOR & In-place
// Time Complexity: O(n)
// Space Complexity: O(1) - In-place

var decode = function (encoded, first) {
  let realFirst = first;
  for (let i = 0; i < encoded.length; i++) {
    first = first ^ encoded[i];
    encoded[i] = first;
  }

  return [realFirst, ...encoded];
};

// Solution 3 - Bitwise XOR & Unshift
// Time Complexity: O(n)
// Space Complexity: O(n)

var decode = function (encoded, first) {
  let decodedArr = [first];

  for (let i = 0; i < encoded.length; i++) {
    decodedArr.unshift(decodedArr[0] ^ encoded[i]);
  }

  return decodedArr;
};

// Solution 2 - Bitwise XOR & Push
// Time Complexity: O(n)
// Space Complexity: O(n)

var decode = function (encoded, first) {
  let decodedArr = [first];

  for (let i = 0; i < encoded.length; i++) {
    decodedArr.push(decodedArr[i] ^ encoded[i]);
  }

  return decodedArr;
};

// Solution 1 - Spread Operator
// Time Complexity: O(n)
// Space Complexity: O(n)

var decode = function (encoded, first) {
  let decodedArr = [first, ...encoded];

  for (let i = 1; i < decodedArr.length; i++) {
    decodedArr[i] = decodedArr[i - 1] ^ decodedArr[i];
  }

  return decodedArr;
};
