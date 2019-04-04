var insertIntoBST = function(root, val) {
  if (root === null) return new TreeNode(val)
  const result = root
  insertNode(result, val)
  return result

  function insertNode(node, value) {
      if (node.val > value) {
          if (node.left === null) {
              node.left = new TreeNode(value)
          } else {
              return insertNode(node.left, value)
          }

      } else {
          if (node.right === null) {
              node.right = new TreeNode(value)
              return
          } else {
              return insertNode(node.right, value)
          }
      }
  }
};
