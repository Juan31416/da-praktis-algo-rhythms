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

// Solution 1
// Time Complexity: O(n)
// Space Complexity: O(n)

var deleteDuplicates = function (head) {
  if (head == null) {
    return head;
  }
  let node = head;
  while (node.next) {
    if (node.val == node.next.val) {
      node.next = node.next.next;
    } else {
      node = node.next;
    }
  }
  return head;
};
