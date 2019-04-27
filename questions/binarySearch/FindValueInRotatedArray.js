var search = function(nums, target) {
  if (nums.length === 0) return -1
  return searching(nums, target, 0, nums.length - 1)
};

function searching(nums, target, start, end) {
  if (start > end) return -1
  if (nums[start] <= nums[end]) {
      return binarySearch(nums, target, start, end)
  }
  const mid = start + Math.floor((end - start) / 2)
  if (nums[mid] === target) return mid
  const leftResult = searching(nums, target, start, mid - 1)
  if (leftResult !== -1) return leftResult
  const rightResult = searching(nums, target, mid + 1, end)
  if (rightResult !== -1) return rightResult
  return -1
}

function binarySearch(nums, target, start, end) {
  if (start > end) return -1
  const mid = start + Math.floor((end - start) / 2)
  const midNum = nums[mid]
  if (target === midNum) {
      return mid
  }
  if (target < midNum) {
      return binarySearch(nums, target, start, mid - 1)
  }
  if (target > midNum) {
      return binarySearch(nums, target, mid + 1, end)
  }
}
