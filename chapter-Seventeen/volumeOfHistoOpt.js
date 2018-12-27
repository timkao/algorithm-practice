const assert = require('assert')

const ex1 = [0, 0, 4, 0, 0, 6, 0, 0, 3, 0, 5, 0, 1, 0, 0, 0]
const ex2 = [0, 0, 4, 0, 0, 6, 0, 0, 3, 0, 8, 0, 2, 0, 5, 2, 0, 3, 0, 0]

function volumeOfHistoOpt(nums) {
  const leftMaxIdx = createLeftMax(nums)
  const rightMaxIdx = createRigthMax(nums)
  const maxIdx = rightMaxIdx[0]
  return findVolume(nums, 0, nums.length - 1, leftMaxIdx, rightMaxIdx, maxIdx)
}

function findVolume(nums, begin, end, leftMax, rightMax, maxIndex) {
  const leftIdx = setLeftMaxIdx(maxIndex, leftMax, nums)
  const rightIdx = setRightMaxIdx(maxIndex, rightMax, nums)
  const leftValue = leftIdx === maxIndex ? 0 : nums[leftIdx]
  const rightValue = rightIdx === maxIndex ? 0 : nums[rightIdx]
  let leftVolume = 0
  let rightVolume = 0
  if (leftValue !== 0) {
    leftVolume = computeVolume(nums, leftIdx, maxIndex) + findVolume(nums, begin, leftIdx, leftMax, rightMax, leftIdx)
  }
  if (rightValue !== 0) {
    rightVolume = computeVolume(nums, maxIndex, rightIdx) + findVolume(nums, rightIdx, end, leftMax, rightMax, rightIdx)
  }
  return leftVolume + rightVolume
}

function setLeftMaxIdx(maxIdx, leftMaxArr, nums) {
  if (maxIdx === 0) return maxIdx
  const nextIdx = leftMaxArr[maxIdx - 1]
  if (nums[nextIdx] > nums[maxIdx]) return maxIdx
  return nextIdx
}

function setRightMaxIdx(maxIdx, rightMaxArr, nums) {
  if (maxIdx === nums.length - 1) return maxIdx
  const nextIdx = rightMaxArr[maxIdx + 1]
  if (nums[nextIdx] > nums[maxIdx]) return maxIdx
  return nextIdx
}

function computeVolume(arr, begin, end) {
  let result = 0
  const height = Math.min(arr[begin], arr[end])
  for (var i = begin + 1; i < end; i++) {
    result += height
    result -= arr[i]
  }
  return result
}

function createLeftMax(arr) {
  const result = []
  let currMax = Number.NEGATIVE_INFINITY
  let maxIdx = 0
  arr.forEach((num, idx) => {
    if (num > currMax) {
      currMax = num
      maxIdx = idx
    }
    result.push(maxIdx)
  })
  return result
}

function createRigthMax(arr) {
  const result = []
  let currMax = Number.NEGATIVE_INFINITY
  let maxIdx = arr.length - 1
  for (var i = arr.length - 1; i >= 0; i--) {
    if (arr[i] > currMax) {
      currMax = arr[i]
      maxIdx = i
    }
    result.unshift(maxIdx)
  }
  return result
}

assert.equal(volumeOfHistoOpt(ex1), 26)
assert.equal(volumeOfHistoOpt(ex2), 46)
