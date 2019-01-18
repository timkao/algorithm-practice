/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var subsets = function(nums, acc = [], result = [], start = 0) {
  if (start >= nums.length) {
      result.push(acc.slice(0))
      return
  }
  const candidates = [true, false]
  for (var i = 0; i < candidates.length; i++) {
      const candidate = candidates[i]
      if (candidate) {
          acc.push(nums[start])
          subsets(nums, acc, result, start + 1)
          acc.pop()
      } else {
          subsets(nums, acc, result, start + 1)
      }
  }
  return result
};
