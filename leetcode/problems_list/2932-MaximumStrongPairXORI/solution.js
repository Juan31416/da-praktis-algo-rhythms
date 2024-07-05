/**
 * @param {number[]} nums
 * @return {number}
 */
// Solution 3 - Trie - Wrong
// Time Complexity: O(n)
// Space Complexity: O(n)
class TrieNode {
  constructor() {
    this.children = new Array(2).fill(null);
  }
}

var maximumStrongPairXor = function (nums) {
  let root = new TrieNode();
  let maXor = 0;

  for (let num of nums) {
    let cur = root;
    let xor = 0;
    let maXor = 0;

    for (let i = 31; i >= 0; i--) {
      let bit = (num >> i) & 1;

      if (!cur.children[bit]) {
        cur.children[bit] = new TrieNode();
      }

      let next = cur.children[bit];

      if (cur.children[1 - bit]) {
        maXor = (maXor << 1) | 1;
        next = cur.children[1 - bit];
      } else {
        maXor = maXor << 1;
      }

      cur = next;
    }

    xor = num ^ maXor;
    maXor = xor > maXor ? xor : maXor;
  }

  return maXor;
};

// Solution 2 - Bit Manipulation - Wrong
// Time Complexity: O(n)
// Space Complexity: O(1)

var maximumStrongPairXor = function (nums) {
  let maXor = 0;
  let mask = 0;

  for (let i = 30; i >= 0; i--) {
    mask = mask | (1 << i);
    let set = new Set();

    for (let num of nums) {
      set.add(num & mask);
    }

    let temp = maXor | (1 << i);

    for (let prefix of set) {
      if (set.has(temp ^ prefix)) {
        maXor = temp;
        break;
      }
    }
  }

  return maXor;
};
// Solution 1 - Nested For Loop - Correct
// Time Complexity: O(n^2)
// Space Complexity: O(1)
var maximumStrongPairXor = function (nums) {
  let maXor = 0;

  for (let i = 0; i < nums.length; i++) {
    for (let j = i; j < nums.length; j++) {
      if (Math.abs(nums[i] - nums[j]) <= Math.min(nums[i], nums[j])) {
        maXor = (nums[i] ^ nums[j]) > maXor ? nums[i] ^ nums[j] : maXor;
      }
    }
  }

  return maXor;
};
