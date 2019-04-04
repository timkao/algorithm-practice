var distributeCoins = function(root) {
  let result = 0
  distributing(root)
  return result

  function distributing(node) {
      if (node === null) return 0
      const left = distributing(node.left)
      result += Math.abs(left)
      node.val += left
      const right = distributing(node.right)
      result += Math.abs(right)
      node.val += right
      return node.val - 1
  }
};
