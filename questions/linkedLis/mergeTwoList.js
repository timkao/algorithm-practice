/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var mergeTwoLists = function(l1, l2) {
  if (l1 === null) return l2
  if (l2 === null) return l1
  if (l1 === null && l2 === null) return null

  let newNode
  let p1, p2
  if (l1.val <= l2.val) {
      newNode = new ListNode(l1.val)
      p1 = l1.next
      p2 = l2

  } else {
      newNode = new ListNode(l2.val)
      p2 = l2.next
      p1 = l1
  }
  const result = newNode
  while (p1 !== null || p2 !== null) {
      if (p1 === null) {
          return mergeNode(newNode, p2, result)
      }
      if (p2 === null) {
          return mergeNode(newNode, p1, result)
      }

      if (p1.val <= p2.val) {
          newNode.next = new ListNode(p1.val)
          p1 = p1.next
      } else {
          newNode.next = new ListNode(p2.val)
          p2 = p2.next
      }
      newNode = newNode.next
  }
  return newNode
};

function mergeNode(node, targetNode, result) {
  while (targetNode !== null) {
      node.next = targetNode
      targetNode = targetNode.next
      node = node.next
  }
  return result
}
