/**
 * @param {TreeNode} root
 * @return {TreeNode}
 */
var invertTree = function(root) {
  if (root === null) return root
  if (root.left === null && root.right === null) return root
  swapLeftAndRight(root)
  invertTree(root.left)
  invertTree(root.right)
  return root
};

function swapLeftAndRight(root) {
  const temp = root.left
  root.left = root.right
  root.right = temp
}
