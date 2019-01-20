/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {boolean}
 */
var isSymmetric = function(root) {
  if (root === null) return true
  if (root.left === root.right) return true
  if (root.left === null && root.right !== null) return false
  if (root.left !== null && root.right === null) return false
  return checkSym([root.left], [root.right])
};

function checkSym(leftQueue, rightQueue) {
  if (leftQueue.length === 0 && rightQueue.length === 0) return true
  if (leftQueue.length !== 0 && rightQueue.length === 0) return false
  if (leftQueue.length !== 0 && rightQueue.length === 0) return false
  let leftPt = 0
  let rightPt = rightQueue.length - 1
  while (leftPt < leftQueue.length && rightPt >= 0) {
      const currLeft = leftQueue[leftPt] === null ? null : leftQueue[leftPt].val
      const currRight = rightQueue[rightPt] === null ? null : rightQueue[rightPt].val
      if (currLeft !== currRight) return false
      leftPt += 1
      rightPt -= 1
  }
  leftQueue = generateChildren(leftQueue)
  rightQueue = generateChildren(rightQueue)
  return checkSym(leftQueue, rightQueue)
}

function generateChildren(queue) {
  const result = []
  while(queue.length !== 0) {
      const currNode = queue.shift()
      if (currNode !== null) {
          result.push(currNode.left)
          result.push(currNode.right)
      }
  }
  return result
}
