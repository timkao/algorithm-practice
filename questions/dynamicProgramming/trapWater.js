/**
 * @param {number[]} height
 * @return {number}
 */
var trap = function(height) {
  if (height.length === 0) return 0
  const [globalMax, globalMaxIdx] = findMax(height, 0, height.length - 1)
  const [leftMax, leftMaxIdx] = findMax(height, 0, globalMaxIdx - 1)
  const [rightMax, rightMaxIdx] = findMax(height, globalMaxIdx + 1, height.length - 1)
  const leftCurrVolume = calculateVolume(height, leftMax, globalMax, leftMaxIdx, globalMaxIdx)
  const rightCurrVolume = calculateVolume(height, rightMax, globalMax, globalMaxIdx, rightMaxIdx)
  const leftRestVolume = generateVolume(height, 0, leftMaxIdx, leftMax, 'maxOnRight')
  const rightRestVolume = generateVolume(height, rightMaxIdx, height.length - 1, rightMax, 'maxOnLeft')
  return leftCurrVolume + rightCurrVolume + leftRestVolume + rightRestVolume
};

function generateVolume(arr, start, end, currMax, status) {
  if (start === null || end === null) return 0
  if (start >= end) return 0
  if (status === 'maxOnRight') {
    const [leftMax, leftMaxIdx] = findMax(arr, start, end - 1)
    const leftCurrVolume = calculateVolume(arr, leftMax, currMax, leftMaxIdx, end)
    return leftCurrVolume + generateVolume(arr, start, leftMaxIdx, leftMax, 'maxOnRight')
  }
  if (status === 'maxOnLeft') {
    const [rightMax, rightMaxIdx] = findMax(arr, start + 1, end)
    const rightCurrVolume = calculateVolume(arr, rightMax, currMax, start, rightMaxIdx)
    return rightCurrVolume + generateVolume(arr, rightMaxIdx, end, rightMax, 'maxOnLeft')
  }
}

function findMax(arr, start, end) {
  let max = null
  let maxIdx = null
  for (let i = start; i <= end; i++) {
    if (max === null || max < arr[i]) {
      max = arr[i]
      maxIdx = i
    }
  }
  return [max, maxIdx]
}

function calculateVolume(nums, secondMax, firstMax, start, end) {
  let result = 0;
  for (let i = start + 1; i < end; i++) {
    result += Math.min(secondMax, firstMax) - nums[i]
  }
  return result
}
