/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {void} Do not return anything, modify root in-place instead.
 */
var flatten = function(root) {
  if (root == null || undefined) return null
  if (root.left !== null && root.left.parent === undefined) {
      root.left.parent = root
  }
  if (root.right !== null && root.right.parent === undefined) {
      root.right.parent = root
  }
  if (root.left === null && root.right !== null) {
      flatten(root.right)
  }
  if (root.left !== null && root.right === null) {
      root.right = root.left
      root.left = null
      flatten(root.right)
  }
  if (root.left !== null && root.right !== null) {
      const temp = root.right
      root.right = root.left
      root.right.next = temp
      root.left = null
      flatten(root.right)
  }
  if (root.left === null && root.right === null) {
      if (root.next !== undefined) {
          root.right = root.next
          flatten(root.right)
      } else {
          const nextNode = findNext(root)
          root.right = nextNode
          flatten(root.right)
      }
  }
};

function findNext(root) {
  if (root === undefined) return null
  if (root.next === undefined) {
      return findNext(root.parent)
  }
  return root.next
}
