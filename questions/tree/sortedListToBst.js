var sortedListToBST = function(head) {
  const count = counting(head)
  return createBst(head, 0, count - 1)
};

function createBst(node, start, end) {
  if (start > end) return null
  const mid = start + Math.floor((end - start) / 2)

  let pt = node
  for (let i = start; i < mid; i++) {
      pt = pt.next
  }

  const newNode = new TreeNode(pt.val)
  newNode.left = createBst(node, start, mid - 1)
  newNode.right = createBst(pt.next, mid + 1, end)
  return newNode
}

function counting(node) {
  let result = 0
  while (node !== null) {
      result += 1
      node = node.next
  }
  return result
}

var sortedListToBSTSpace = function(head) {
  const nums = listToArr(head)
  return createBst(nums, 0, nums.length - 1)
};

function createBst(nums, start, end) {
  if (start > end) return null
  const mid = start + Math.floor((end - start) / 2)
  const newNode = new TreeNode(nums[mid])
  newNode.left = createBst(nums, start, mid - 1)
  newNode.right = createBst(nums, mid + 1, end)
  return newNode
}

function listToArr(node) {
  const result = []
  while (node !== null) {
      result.push(node.val)
      node = node.next
  }
  return result
}
