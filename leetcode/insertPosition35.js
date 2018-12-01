function searchInsert(nums, target, start = 0) {
  if (nums.length === 0) return start
  const cutPoint = Math.floor(nums.length / 2)
  if (nums[cutPoint] === target) return cutPoint + start
  if (nums[cutPoint] < target) return searchInsert(nums.slice(cutPoint + 1, nums.length), target, cutPoint + start + 1)
  if (nums[cutPoint] > target) return searchInsert(nums.slice(0, cutPoint), target, start)
}

console.log(searchInsert([1, 3, 5, 6], 5))
console.log(searchInsert([1, 3, 5, 6], 2))
console.log(searchInsert([1, 3, 5, 6], 7))
console.log(searchInsert([1, 3, 5, 6], 0))
console.log(searchInsert([2, 3, 5, 6, 9], 7))
