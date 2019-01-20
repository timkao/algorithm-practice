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
  this.stack = []
  let currNode = root
  while (currNode !== null) {
      this.stack.push(currNode)
      currNode = currNode.left
  }
};

/**
* @return the next smallest number
* @return {number}
*/
BSTIterator.prototype.next = function() {
  let currNode = this.stack.pop()
  const result = currNode.val
  if (currNode.right !== null) {
      currNode = currNode.right
      while (currNode !== null) {
          this.stack.push(currNode)
          currNode = currNode.left
      }
  }

  return result
};

/**
* @return whether we have a next smallest number
* @return {boolean}
*/
BSTIterator.prototype.hasNext = function() {
  return this.stack.length > 0
};

/**
* Your BSTIterator object will be instantiated and called as such:
* var obj = Object.create(BSTIterator).createNew(root)
* var param_1 = obj.next()
* var param_2 = obj.hasNext()
*/
