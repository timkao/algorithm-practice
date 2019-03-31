/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */

/**
 * Encodes a tree to a single string.
 *
 * @param {TreeNode} root
 * @return {string}
 */
var serialize = function(root) {
  const result = []
  preOrderDFS(root)
  return result.join('*')

  function preOrderDFS(node) {
      if (node === null) {
          result.push('X')
          return
      }
      result.push(node.val)
      preOrderDFS(node.left)
      preOrderDFS(node.right)
  }

};

/**
* Decodes your encoded data to tree.
*
* @param {string} data
* @return {TreeNode}
*/
var deserialize = function(data) {
  const tokens = data.split('*')
  return createTree(tokens)

  function createTree(queue) {
      if (queue.length <= 0) return null
      const curSign = queue.shift()
      if (curSign === 'X') return null
      const curVal = Number(curSign)
      const result = new TreeNode(curVal)
      result.left = createTree(queue)
      result.right = createTree(queue)
      return result
  }
};

/**
* Your functions will be called as such:
* deserialize(serialize(root));
*/
