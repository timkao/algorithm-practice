/* eslint-disable */
var lowestCommonAncestor = function(root, p, q) {
  if (root.val === p.val || root.val === q.val) return root
  let result = null
  findLCA(root.left, p, q)
  if (result !== null) return result
  findLCA(root.right, p, q)
  if (result !== null) return result
  return root

  function findLCA(node, target1, target2) {
      if (result !== null) return false
      if (node === null) return false
      let rootIsTarget = false
      if (node.val === target1.val || node.val === target2.val) rootIsTarget = true
      if (rootIsTarget === false) {
          const left = findLCA(node.left, target1, target2)
          const right = findLCA(node.right, target1, target2)
          if (left && right) result = node
          return left || right
      } else {
          const left = findLCA(node.left, target1, target2)
          if (left) result = node
          const right = findLCA(node.right, target1, target2)
          if (right) result = node
          return true
      }

  }
};
