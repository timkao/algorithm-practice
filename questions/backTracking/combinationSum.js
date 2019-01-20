/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum = function(candidates, target) {
  candidates = candidates.sort((a, b) => a - b)
  return generateCombination(candidates, target, [], [], 0)
};

function generateCombination(nums, target, result, acc, start) {
  if (target === 0) {
      result.push(acc.slice(0))
      return result
  }
  for (var i = start; i < nums.length; i++) {
      const currNum = nums[i]
      if (currNum <= target) {
          acc.push(currNum)
          generateCombination(nums, target - currNum, result, acc, i)
          acc.pop(currNum)
      } else {
          break
      }
  }
  return result
}
