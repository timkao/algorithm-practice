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

var countUnivalSubtrees = function(root) {
    if (root === null) return 0
    let result = 0
    isUni(root)
    return result

    function isUni(node) {
        if (node === null) return true
        const left = isUni(node.left)
        const right = isUni(node.right)
        if (left && right) {
            if (isValid(node, node.left, node.right)) {
                result += 1
                return true
            }
            return false
        } else {
            return false
        }
    }

    function isValid(node, leftNode, rightNode) {
        if (leftNode === null && rightNode === null) return true
        if (leftNode === null && rightNode.val === node.val) return true
        if (rightNode === null && leftNode.val === node.val) return true
        if (leftNode !== null && rightNode !== null && leftNode.val === node.val && rightNode.val === node.val) return true
        return false
    }
};
