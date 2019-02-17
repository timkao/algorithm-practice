/**
 * @param {number[]} nums
 * @return {number}
 */
var lengthOfLIS = function(nums, start = 0, prev = Number.NEGATIVE_INFINITY) {
  if (start >= nums.length) return 0
  const currNum = nums[start]
  let takeIt = 0
  if (currNum > prev) {
      takeIt = 1 + lengthOfLIS(nums, start + 1, currNum)
  }
  let notTakeIt = lengthOfLIS(nums, start + 1, prev)
  return Math.max(takeIt, notTakeIt)
};

var lengthOfLISDP = function(nums) {
  if (nums.length === 0) return 0
  const dp = [1]
  let globalMax = 1
  for (let i = 1; i < nums.length; i++) {
      dp[i] = findLocalMax(dp, nums, i)
      if (dp[i] > globalMax) globalMax = dp[i]
  }
  return globalMax
};

function findLocalMax(dp, nums, idx) {
  let result = 1
  let max = 0
  const currNum = nums[idx]
  for (let i = idx - 1; i >= 0; i--) {
      if (currNum > nums[i]) {
          if (max < dp[i]) max = dp[i]
      }
  }
  return result + max
}

var lengthOfLISBNY = function(nums) {
  if (nums.length === 0) return 0
  const dp = [nums[0]]
  for (let i = 1; i < nums.length; i++) {
      const curNum = nums[i]
      if (curNum <= dp[0]) {
          dp[0] = curNum
      } else if (curNum > dp[dp.length - 1]) {
          dp[dp.length] = curNum
      } else {
          binaryUpdate(dp, 0, dp.length - 1, curNum)
      }
  }
  return dp.length
};

function binaryUpdate(arr, start, end, num) {
if (start > end) return
const mid = start + Math.floor((end - start) / 2)
  if (arr[mid] === num) {
    arr[mid + 1] = num
  } else if (arr[mid] > num) {
      if (arr[mid - 1] <= num) {
        arr[mid] = num
      } else {
        binaryUpdate(arr, start, mid - 1, num)
      }
  } else {
    if (arr[mid + 1] >= num) {
      arr[mid + 1] = num
    } else {
       binaryUpdate(arr, mid + 1, end, num)
    }
  }
}
