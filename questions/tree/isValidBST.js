var isValidBST = function(root) {
  return validating(root)
};

function validating(node, lowerBound = Number.NEGATIVE_INFINITY, upperBound = Number.POSITIVE_INFINITY) {
  if (node === null) return true
  if (node.left === null && node.right === null) return true
  if (node.left !== null &&
      (node.left.val <= lowerBound || node.left.val >= node.val)) {
      return false
  }
  if (node.right !== null &&
      (node.right.val <= node.val || node.right.val >= upperBound)) {
      return false
  }
  return validating(node.right, node.val, upperBound)
      && validating(node.left, lowerBound, node.val)
}
