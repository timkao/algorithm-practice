var constructMaximumBinaryTree = function(nums) {
  return buildMaxBinaryTree(nums, 0, nums.length - 1)
};

function buildMaxBinaryTree(arr, start, end) {
  if (start > end) return null
  const cutPoint = findMaxIdx(arr, start, end)
  const newNode = new TreeNode(arr[cutPoint])
  newNode.left = buildMaxBinaryTree(arr, start, cutPoint - 1)
  newNode.right = buildMaxBinaryTree(arr, cutPoint + 1, end)
  return newNode
}

function findMaxIdx(arr, start, end) {
  let result = start
  let currMax = Number.NEGATIVE_INFINITY
  for (var i = start; i <= end; i++) {
      if (arr[i] > currMax) {
          result = i
          currMax = arr[i]
      }
  }
  return result
}
