/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
       this.height
 * }
 */
/**
 * @param {TreeNode} root
 * @return {boolean}
 */
var isBalanced = function(root) {
  if (root === null) return true
  let checkLeft
  let checkRight
  if (root.left !== null) {
      checkLeft = isBalanced(root.left)
  }
  if (checkLeft === false) return false
  if (root.right !== null) {
      checkRight = isBalanced(root.right)
  }
  if (checkRight === false) return false

  const leftHeight = findHeight(root.left)
  const rightHeight = findHeight(root.right)

  return Math.abs(leftHeight - rightHeight) <= 1
};

function findHeight(node) {
  if (node === null) return 0
  if (node.height !== undefined) return node.height
  const left = findHeight(node.left)
  const right = findHeight(node.right)
  node.height = 1 + Math.max(left, right)
  return node.height
}
