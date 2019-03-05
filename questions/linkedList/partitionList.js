/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} x
 * @return {ListNode}
 */
var partition = function(head, x) {
  let smallerHead = null
  let smallerTail = null
  let biggerHead = null
  let biggerTail = null
  let node = head
  while (node !== null) {
      if (node.val < x) {
          if (smallerTail === null) {
              smallerHead = node
              smallerTail = node
          } else {
              smallerTail.next = node
              smallerTail = smallerTail.next
          }
      } else {
          if (biggerTail === null) {
              biggerHead = node
              biggerTail = node
          } else {
              biggerTail.next = node
              biggerTail = biggerTail.next
          }
      }
      node = node.next
  }
  if (smallerHead === null) return biggerHead
  if (biggerHead === null) return smallerHead
  biggerTail.next = null  // 若無此行則會造成循環
  smallerTail.next = biggerHead
  return smallerHead
};
