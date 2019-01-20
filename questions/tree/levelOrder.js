/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[][]}
 */
var levelOrder = function(root) {
  if (root === null) return []
  let queue = []
  const result = []
  let nextQueue = []
  let levelResult = []
  queue.push(root)
  while (queue.length > 0) {
      const currNode = queue.shift()
      levelResult.push(currNode.val)
      if (currNode.left !== null) {
          nextQueue.push(currNode.left)
      }
      if (currNode.right !== null) {
          nextQueue.push(currNode.right)
      }
      if (queue.length === 0) {
          queue = nextQueue
          nextQueue = []
          result.push(levelResult)
          levelResult = []
      }
  }
  return result
};
