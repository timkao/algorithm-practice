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

var minSubArrayLenOpt = function(s, nums) {
  let localAns = 0
  let ans = Number.POSITIVE_INFINITY
  let slow = 0
  let sum = 0
  for (let fast = 0; fast < nums.length; fast++) { // move the fast pointer to increase the sum
      sum += nums[fast]
      localAns += 1 // since we move the fast pointer by 1, the local answer is increased by 1
      while (sum >= s) { // start from the first qualified position. Also, whenever we reach the target, we check
          ans = Math.min(ans, localAns)
          sum -= nums[slow]
          slow += 1 // move the slow pointer to decrease the sum
          localAns -= 1 // since we move the slow pointer by one, the local answer is decreased by 1
      }
  }
  return ans === Number.POSITIVE_INFINITY ? 0 : ans
};

var minSubArrayLenBinarySearch = function(s, nums) {
  const sums = []
  let localSum = 0
  for (let i = 0; i < nums.length; i++) {
      if (nums[i] >= s) return 1 // in the cases like: [1, 4, 4]
      localSum += nums[i]
      sums[i] = localSum
  }
  let result = Number.POSITIVE_INFINITY
  for (let j = 0; j < sums.length; j++) {
      const diff = j === 0 ? 0 : sums[j - 1]
      const target = s + diff
      const resLoc = binarySearch(sums, target, j + 1, sums.length - 1)
      result = Math.min(result, resLoc - j + 1)
  }
  return result === Number.POSITIVE_INFINITY ? 0 : result
};

function binarySearch(arr, target, begin, end) {
  if (begin >= end) {
      if (arr[begin] === undefined || arr[begin] < target) return Number.POSITIVE_INFINITY
      return begin
  }
  const mid = begin + Math.floor((end - begin) / 2)
  const curNum = arr[mid]
  if (curNum === target) {
      return mid
  } else if (curNum > target) {
      return binarySearch(arr, target, begin, mid - 1)
  } else {
      return binarySearch(arr, target, mid + 1, end)
  }
}
