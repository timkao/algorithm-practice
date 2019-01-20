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
var diameterOfBinaryTree = function(root) {
  if (root === null) return 0
  const memo = {longestPath: 0}
  const left = findHeightAndPath(root.left, memo)
  const right = findHeightAndPath(root.right, memo)
  return Math.max(memo.longestPath, left + right)
};

function findHeightAndPath(root, memo) {
  if (root === null) return 0
  const left = 1 + findHeightAndPath(root.left, memo)
  const right = 1 + findHeightAndPath(root.right, memo)
  if (memo.longestPath < left + right - 2) {
      memo.longestPath = left + right - 2
  }
  return Math.max(left, right)
}
