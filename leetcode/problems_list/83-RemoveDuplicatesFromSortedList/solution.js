/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */

// Solution 2 - My solution
// Time Complexity: O(n)
// Space Complexity: O(1)

var deleteDuplicates = function (head) {
  if (head === null || head.next === null) return head;

  let left = head;
  let right = head.next;

  while (left.next !== null) {
    if (left.val === right.val) {
      left.next = right.next ?? null;
      right = right.next ?? null;
    } else {
      left = right;
      right = right.next;
    }
  }
  return head;
};

// // Solution 1 - Not my solution Only one pointer
// // Time Complexity: O(n)
// // Space Complexity: O(1)

// var deleteDuplicates = function (head) {
//   if (head == null) {
//     return head;
//   }
//   let node = head;
//   while (node.next) {
//     if (node.val == node.next.val) {
//       node.next = node.next.next;
//     } else {
//       node = node.next;
//     }
//   }
//   return head;
// };
