/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
var countNodes = function(root) {
  if (root === null) return 0
  const leftHeight = findLeftHeight(root.left)
  const rightHeight = findRightHeight(root.right)
  if (leftHeight === rightHeight) {
      return calculateNodes(leftHeight)
  }
  const leftNodes = countNodes(root.left)
  const rightNodes = countNodes(root.right)
  return leftNodes + rightNodes + 1
};

function calculateNodes(height) {
  return Math.pow(2, height + 1) - 1
}

function findLeftHeight(root) {
  if (root === null) return 0
  if (root.left !== null) {
      return 1 + findLeftHeight(root.left)
  } else {
      return 1
  }
}

function findRightHeight(root) {
  if (root === null) return 0
  if (root.right !== null) {
      return 1 + findRightHeight(root.right)
  } else {
      return 1
  }
}
