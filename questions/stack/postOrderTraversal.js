var postorderTraversal = function(root) {
  if (root === null) return []
  const result = []
  const stack = []
  stack.push(root)

  while (stack.length > 0) {
      const curNode = stack.pop()
      result.unshift(curNode.val)
      if (curNode.left !== null) {
          stack.push(curNode.left)
      }
      if (curNode.right !== null) {
          stack.push(curNode.right)
      }
  }
  return result
};
