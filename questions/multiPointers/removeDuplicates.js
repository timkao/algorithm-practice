var removeDuplicates = function(nums) {
  if (nums.length === 0) return 0
  let modifier = 0
  let redundant = false
  for (let i = 1; i < nums.length; i++) {
      const curNum = nums[i]
      const prevNum = nums[i - 1]
      if (curNum === prevNum && !redundant) {
          redundant = true
          modifier += 1
      } else if (curNum !== prevNum) {
          redundant = false
          modifier += 1
      } else if (curNum === prevNum && redundant) {
          // modifier stands still
      }
      nums[modifier] = nums[i]
  }
  return modifier + 1
};
