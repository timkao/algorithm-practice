var countUnivalSubtrees = function(root) {
  let count = 0
  traverseTree(root)
  return count

  function traverseTree(node) {
      if (node === null) return
      traverseTree(node.left)
      traverseTree(node.right)
      if (isUni(node)) {
          count += 1
          node.uni = true
      }
  }
  /* eslint-disable */
  function isUni(node) {
      if (node.left === null && node.right === null) return true
      if (node.left === null) {
          return node.right.uni === true && node.val === node.right.val
      }
      if (node.right === null) {
          return node.left.uni === true && node.val === node.left.val
      }
      if (node.left !== null && node.right !== null) {
          return node.left.uni === true && node.right.uni === true
              && node.left.val === node.val && node.right.val === node.val
      }
      return false
  }
};
