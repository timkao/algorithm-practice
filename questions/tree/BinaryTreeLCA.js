var lowestCommonAncestor = function(root, p, q) {
  if (root === null) return null
  const firstChild = findFirstChild(root, p, q)
  let startNode = firstChild
  const targetNdoe = firstChild.val === p.val ? q : p;
  while (startNode !== undefined) {
      const hasAnotherChild = hasSecondChild(startNode, startNode.parent, targetNdoe)
      if (hasAnotherChild) return startNode.parent
      startNode = startNode.parent
  }
  return firstChild
};

function findFirstChild(root, nodeA, nodeB) {
  const queue = []
  queue.push(root)
  while (queue.length > 0) {
      const currNode = queue.shift()
      if (currNode.val === nodeA.val) return nodeA
      if (currNode.val === nodeB.val) return nodeB
      if (currNode.left !== null) {
          currNode.left.parent = currNode
          currNode.left.side = 'left'
          queue.push(currNode.left)
      }
      if (currNode.right !== null) {
          currNode.right.parent = currNode
          currNode.right.side = 'right'
          queue.push(currNode.right)
      }
  }
  return null
}

function hasSecondChild(node, parentNode, target) {
  if (parentNode === undefined) return false
  if (parentNode.left === null || parentNode.right === null) return false
  if (node.side === 'right') return hasNode(parentNode.left, target)
  if (node.side === 'left') return hasNode(parentNode.right, target)
}

function hasNode(root, node) {
  if (root === null) return false
  if (root.val === node.val) return true
  const inLeft = hasNode(root.left, node)
  const inRight = hasNode(root.right, node)
  return inLeft || inRight
}
