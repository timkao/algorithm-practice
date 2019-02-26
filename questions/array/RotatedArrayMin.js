var findMin = function(nums) {
  let result = Number.POSITIVE_INFINITY
  divideFind(nums, 0, nums.length - 1)
  return result

  function divideFind(nums, start, end) {
      if (end - start === 1) {
          result = Math.min(result, nums[start], nums[end])
          return
      }
      if (end === start) {
          result = Math.min(result, nums[start])
          return
      }
      if (end < start) return
      const cutPoint = Math.floor(start + (end - start) / 2)
      const leftHead = nums[start]
      const leftTail = nums[cutPoint]
      const rightHead = nums[cutPoint + 1]
      if (leftHead < leftTail) {
          result = Math.min(result, leftHead)
          divideFind(nums, cutPoint + 1, end)
      } else {
          result = Math.min(result, rightHead)
          divideFind(nums, start, cutPoint)
      }
  }
};
