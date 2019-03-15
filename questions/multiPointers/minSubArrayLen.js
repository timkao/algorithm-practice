var minSubArrayLen = function(s, nums) {
  let sum = 0
  const sums = []
  let result = 0
  let smallPt = 0
  let bigPt = null
  for (let i = 0; i < nums.length; i++) {
    const curNum = nums[i]
    if (curNum >= s) return 1
    sum += curNum
    sums[i] = sum
      if (sum >= s && bigPt === null) {
        bigPt = i
        result = i + 1
    }
  }
  while (bigPt < sums.length && smallPt < bigPt) {
    const diff = sums[bigPt] - sums[smallPt]
    if (diff < s) {
        bigPt += 1
    } else {
        result = Math.min(result, bigPt - smallPt)
        smallPt += 1
    }
  }
  return result
};
