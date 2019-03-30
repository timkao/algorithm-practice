var pathSum = function(root, sum) {
  if (root === null) return []
  const result = []
  findPaths(root, [root.val])
  return result

  function findPaths(node, acc) {
    if (node.left === null && node.right === null) {
        if (acc.reduce((aggr, num) => aggr + num, 0) === sum) {
            result.push(acc.slice(0))
        }
        return
    }
    if (node.left !== null) {
        acc.push(node.left.val)
        findPaths(node.left, acc)
        acc.pop()
    }
    if (node.right !== null) {
        acc.push(node.right.val)
        findPaths(node.right, acc)
        acc.pop()
    }
  }
};
