var inorderTraversal = function(root) {
  const result = []
  const stack = []
  moveLeftToStack(root, stack)
  while (stack.length > 0) {
      const curNode = stack.pop()
      result.push(curNode.val)
      if (curNode.right !== null) {
          moveLeftToStack(curNode.right, stack)
      }
  }
  return result

  function moveLeftToStack(node, stack) {
      while (node !== null) {
          stack.push(node)
          node = node.left
      }
  }
};
