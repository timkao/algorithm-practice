var combinationSum2 = function(candidates, target) {
  candidates.sort((a, b) => a - b)
  return generateComb(candidates, target, [], [], 0)

  function generateComb(nums, goal, acc, result, start) {
      if (goal === 0) {
          result.push(acc.slice(0))
          return result
      }
      if (goal < 0 || start === nums.length) return result
      for (let i = start; i < nums.length; i++) {
          const curNum = nums[i]
          const prevNum = nums[i - 1]
          if (i === start || curNum !== prevNum) {
              acc.push(curNum)
              generateComb(nums, goal - curNum, acc, result, i + 1)
              acc.pop()
          }
      }
      return result
  }
};
