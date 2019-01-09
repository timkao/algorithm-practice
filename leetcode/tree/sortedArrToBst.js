/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {number[]} nums
 * @return {TreeNode}
 */
var sortedArrayToBST = function(nums) {
  return turnToBst(nums, 0, nums.length - 1)
};

function turnToBst(arr, start, end) {
  if (start > end) return null
  const midPoint = Math.floor((end - start) / 2) + start  // forgot the start...
  const newNode = new TreeNode(arr[midPoint])
  newNode.left = turnToBst(arr, start, midPoint - 1)
  newNode.right = turnToBst(arr, midPoint + 1, end)
  return newNode
}
