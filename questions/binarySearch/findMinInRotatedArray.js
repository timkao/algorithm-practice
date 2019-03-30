var findMin = function(nums) {
  if (nums.length === 0) return null
  if (nums.length === 1) return nums[0]
  if (nums[0] < nums[nums.length - 1]) return nums[0]
  return binaryFind(nums, 0, nums.length - 1)
};

function binaryFind(nums, start, end) {
  const mid = start + Math.floor((end - start) / 2)
  const cur = nums[mid]
  const left = nums[mid - 1]
  const right = nums[mid + 1]
  if (left !== undefined && cur < left) return cur
  if (right !== undefined && cur > right) return right

  const leftBound = nums[start]
  const rightBound = nums[end]

  if (cur < leftBound) return binaryFind(nums, start, mid - 1)
  if (cur > rightBound) return binaryFind(nums, mid + 1, end)
}
