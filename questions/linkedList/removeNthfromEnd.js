/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
var removeNthFromEnd = function(head, n) {
  let fast = head
  let slow = null
  let count = 0
  while (fast !== null) {
      if (count === n) {
          slow = head
      }
      if (count > n) {
          slow = slow.next
      }
      count += 1
      fast = fast.next
  }
  if (slow === null) {
      head = head.next
  } else {
      slow.next = slow.next.next
  }
  return head
};
