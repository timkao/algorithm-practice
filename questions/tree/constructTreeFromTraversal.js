/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {number[]} preorder
 * @param {number[]} inorder
 * @return {TreeNode}
 */
var buildTree = function(preorder, inorder) {
  return constructTree(preorder, inorder, 0, inorder.length - 1)
};

function constructTree(preorder, inorder, start, end) {
  if (start > end || preorder.length === 0) return null
  const newNode = new TreeNode(preorder.shift())
  const cutPoint = findIdx(inorder, newNode.val)
  newNode.left = constructTree(preorder, inorder, start, cutPoint - 1)
  newNode.right = constructTree(preorder, inorder, cutPoint + 1, end)
  return newNode
}

function findIdx(arr, target) {
  for (var i = 0; i < arr.length; i++) {
      if (arr[i] === target) {
          return i
      }
  }
}
