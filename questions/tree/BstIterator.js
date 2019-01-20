/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 */
var BSTIterator = function(root) {
  this.arr = []
  traverse(root, this.arr)
};

/**
* @return the next smallest number
* @return {number}
*/
BSTIterator.prototype.next = function() {
  return this.arr.shift()
};

/**
* @return whether we have a next smallest number
* @return {boolean}
*/
BSTIterator.prototype.hasNext = function() {
  return this.arr.length > 0
};

/**
* Your BSTIterator object will be instantiated and called as such:
* var obj = Object.create(BSTIterator).createNew(root)
* var param_1 = obj.next()
* var param_2 = obj.hasNext()
*/
function traverse(root, arr) {
  if (root === null) return
  traverse(root.left, arr)
  arr.push(root.val)
  traverse(root.right, arr)
}
