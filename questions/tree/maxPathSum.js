var maxPathSum = function(root) {
  let result = Number.NEGATIVE_INFINITY
  traverseTree(root)
  return result

  function traverseTree(root) {
      if (root === null) return Number.NEGATIVE_INFINITY
      const left = traverseTree(root.left)
      const right = traverseTree(root.right)
      const mid = root.val
      result = Math.max(left, right, result, left + right + mid, left + mid, right + mid, mid)

      if (left >= 0 || right >= 0) {
          if (left < right) return right + mid
          return left + mid
      }
      if (left < 0 && right < 0) return mid

  }

};
