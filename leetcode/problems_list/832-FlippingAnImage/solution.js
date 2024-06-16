/**
 * @param {number[][]} image
 * @return {number[][]}
 */

// Solution 5 - One liner Map and Reverse
// Time Complexity: O(n^2)
// Space Complexity: O(1)
var flipAndInvertImage = function (image) {
  return image
    .map((curr) => curr.reverse())
    .map((inv) => inv.map((intInv) => (intInv === 1 ? 0 : 1)));
};

// Solution 4 - One liner
// Time Complexity: O(n)
// Space Complexity: O(1)

var flipAndInvertImage = function (image) {
  return image.map((row) => row.reverse().map((bit) => 1 - bit));
};

// Solution 3 - Using Bitwise XOR
// Time Complexity: O(n^2)
// Space Complexity: O(1)

var flipAndInvertImage = function (image) {
  for (let i = 0; i < image.length; i++) {
    let left = 0;
    let right = image[i].length - 1;

    while (left <= right) {
      if (image[i][left] === image[i][right]) {
        image[i][left] ^= 1;
        image[i][right] = image[i][left];
      }
      left++;
      right--;
    }
  }

  return image;
};

// Solution 2 - Two Pointers
// Time Complexity: O(n^2)
// Space Complexity: O(1)

var flipAndInvertImage = function (image) {
  for (let i = 0; i < image.length; i++) {
    let left = 0;
    let right = image[i].length - 1;

    while (left <= right) {
      if (image[i][left] === image[i][right]) {
        image[i][left] = 1 - image[i][left];
        image[i][right] = image[i][left];
      }
      left++;
      right--;
    }
  }

  return image;
};

// Solution 1 - Reverse and Invert
// Time Complexity: O(n^2)
// Space Complexity: O(1)

var flipAndInvertImage = function (image) {
  for (let i = 0; i < image.length; i++) {
    image[i] = image[i].reverse();
  }
  for (let i = 0; i < image.length; i++) {
    image[i] = image[i].map((curr) => (curr === 1 ? 0 : 1));
  }

  return image;
};
