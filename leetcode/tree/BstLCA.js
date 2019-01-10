var lowestCommonAncestor = function(root, p, q) {
  if (p.val > q.val) {
      return findLCA(root, p, q)
  }
  return findLCA(root, q, p)
};

function findLCA(root, bigNode, smallNode) {
  if (root.val <= bigNode.val && root.val >= smallNode.val) {
      return root
  }
  if (root.val > bigNode.val) {
      return findLCA(root.left, bigNode, smallNode)
  }
  if (root.val < smallNode.val) {
      return findLCA(root.right, bigNode, smallNode)
  }

}
