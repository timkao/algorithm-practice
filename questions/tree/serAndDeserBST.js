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
  if (root === null) return null
  const queue = [root]
  let result = ''
  while (queue.length > 0) {
      const node = queue.shift()
      if (node.left !== null) queue.push(node.left)
      if (node.right !== null) queue.push(node.right)
      if (queue.length !== 0) {
           result += String(node.val) + '-'
      } else {
          result += String(node.val)
      }

  }
  return result
};

/**
* Decodes your encoded data to tree.
*
* @param {string} data
* @return {TreeNode}
*/
var deserialize = function(data) {
  if (data === null) return null
  const numStrArr = data.split('-')
  const result = new TreeNode(Number(numStrArr[0]))
  for (let i = 1; i < numStrArr.length; i++) {
      const curNum = Number(numStrArr[i])
      addToBST(result, curNum)
  }
  return result
};

function addToBST(node, num) {
  if (num < node.val) {
      if (node.left === null) {
          node.left = new TreeNode(num)
      } else {
          addToBST(node.left, num)
      }
  } else {
      if (node.right === null) {
          node.right = new TreeNode(num)
      } else {
          addToBST(node.right, num)
      }
  }
}


/**
* Your functions will be called as such:
* deserialize(serialize(root));
*/
