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


var removeDuplicates = function(nums) {
    if (nums.length <= 2) return nums.length
    let reachLimit = false
    let confirm = 0

    for (let i = 1; i < nums.length; i++) {
        const curNum = nums[i]
        const prevNum = nums[i - 1]
        if (curNum === prevNum && !reachLimit) {
            reachLimit = true
            confirm += 1
        } else if (curNum !== prevNum) {
            if (reachLimit) reachLimit = false
            confirm += 1
        }
        nums[confirm] = curNum
    }
    return confirm + 1
};
