var diameterOfBinaryTree = function(root) {
  if (root === null) return 0
  let maxDiameter = 0
  // diameterOfBinaryTree(root.left)    redundant and wrong.....
  // diameterOfBinaryTree(root.right)
  root.leftHeight = 1 + findHeight(root.left)
  root.rightHeight = 1 + findHeight(root.right)
  maxDiameter = Math.max(maxDiameter, root.leftHeight + root.rightHeight - 2)
  return maxDiameter

  function findHeight(node) {
      if (node === null) return 0
      node.leftHeight = node.leftHeight ? node.leftHeight : 1 + findHeight(node.left)
      node.rightHeight = node.rightHeight ? node.rightHeight : 1 + findHeight(node.right)
      maxDiameter = Math.max(maxDiameter, node.leftHeight + node.rightHeight - 2)
      return Math.max(node.leftHeight, node.rightHeight)
  }

};
