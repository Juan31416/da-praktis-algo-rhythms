/**
 * @param {character[]} s
 * @return {void} Do not return anything, modify s in-place instead.
 */
// Solution 2 - Sliding window
// Time complexity: O(n)
// Space complexity: O(1)

var reverseString = function (s) {
  let left = 0;
  let right = s.length - 1;

  while (left < right) {
    let temp = s[left];
    s[left] = s[right];
    s[right] = temp;
    left++;
    right--;
  }
};

// Solution 1
// Time complexity: O(n)
// Space complexity: O(1)

var reverseString = function (s) {
  for (
    let i = 0, j = s.length - 1;
    i < s.length / 2, j > s.length / 2 - 1;
    i++, j--
  ) {
    let tempI = s[i];
    s[i] = s[j];
    s[j] = tempI;
  }
};
