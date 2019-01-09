/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} L
 * @param {number} R
 * @return {TreeNode}
 */
var trimBST = function(root, L, R) {
  if (root === null) return null
  if (root.val < L ) return trimBST(root.right, L, R)
  if (root.val > R) return trimBST(root.left, L, R)
  const newNode = new TreeNode(root.val)
  newNode.left = trimBST(root.left, L, R)
  newNode.right = trimBST(root.right, L, R)
  return newNode
};
