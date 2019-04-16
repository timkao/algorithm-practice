var buildTree = function(inorder, postorder) {
  return building(inorder, postorder, 0, inorder.length - 1)
};

function building(inorder, postorder, start, end) {
  if (end < start) return null
  const value = postorder.pop()
  const newNode = new TreeNode(value)
  let cutPoint
  for (let i = start; i <= end; i++) {
      if (inorder[i] === value) {
          cutPoint = i
      }
  }
  newNode.right = building(inorder, postorder, cutPoint + 1, end)
  newNode.left = building(inorder, postorder, start, cutPoint - 1)
  return newNode
}
