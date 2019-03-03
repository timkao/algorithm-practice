var sumNumbers = function(root) {
  const allPaths = []
  buildPath(root, allPaths, '')
  return allPaths.reduce((acc, num) => acc + num, 0)

  function buildPath(node, paths, acc) {
    if (node === null) return
    if (node.left === null && node.right === null) {
        paths.push(Number(acc + String(node.val)))
        return
    }
    buildPath(node.left, paths, acc + String(node.val))
    buildPath(node.right, paths, acc + String(node.val))
  }
};
