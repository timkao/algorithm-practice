const assert = require('assert')

const ex1 = [0, 0, 4, 0, 0, 6, 0, 0, 3, 0, 5, 0, 1, 0, 0, 0]
const ex2 = [0, 0, 4, 0, 0, 6, 0, 0, 3, 0, 8, 0, 2, 0, 5, 2, 0, 3, 0, 0]

function volumeOfHistogram(nums) {
  return findVolume(nums, 0, nums.length - 1)
}

function findVolume(nums, begin, end) {
  const highestIdx = findHighest(nums, begin, end)[1]
  const [leftValue, leftIdx] = findHighest(nums, begin, highestIdx - 1)
  const [rightValue, rightIdx] = findHighest(nums, highestIdx + 1, end)
  let leftVolume = 0
  let rightVolume = 0
  if (leftValue !== 0) {
    leftVolume = computeVolume(nums, leftIdx, highestIdx) + findVolume(nums, begin, leftIdx)
  }
  if (rightValue !== 0) {
    rightVolume = computeVolume(nums, highestIdx, rightIdx) + findVolume(nums, rightIdx, end)
  }
  return leftVolume + rightVolume
}

function findHighest(arr, begin, end) {
  let val = 0
  let idx = null
  for (var i = begin; i <= end; i++) {
    if (arr[i] > val) {
      val = arr[i]
      idx = i
    }
  }
  return [val, idx]
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

assert.equal(volumeOfHistogram(ex1), 26)
assert.equal(volumeOfHistogram(ex2), 46)
