var preorderTraversal = function(root, result = []) {
  if (root === null) return result
  result.push(root.val)
  preorderTraversal(root.left, result)
  preorderTraversal(root.right, result)
  return result
};

var traversalWithStack = function(root) {
  const result = []
  const stack = []
  stack.push(root)

  while (stack.length > 0) {
    const curNode = stack.pop()
    if (curNode !== null) {
      result.push(curNode.val)
      stack.push(curNode.right)
      stack.push(curNode.left)
    }
  }
  return result
};
