/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[][]}
 */
var fourSum = function(nums, target) {
  const needMap = new Map()
  const sumMap = {}
  let result = []

  for (let i = 0; i < nums.length - 1; i++) {
      for (let j = i + 1; j < nums.length; j++) {
          const pair = [i, j]
          const twoSum = nums[i] + nums[j]
          if (j - 1 === i || nums[j] !== nums[j - 1]) {
              needMap.set(pair, target - twoSum)
              if (sumMap[twoSum] === undefined) {
                  sumMap[twoSum] = [pair]
              } else {
                  sumMap[twoSum].push(pair)
              }
          }

      }
  }
  needMap.forEach((need, key) => {
      if (sumMap[need] !== undefined) {
          sumMap[need].forEach(arr => {
              if (!key.includes(arr[0]) && !key.includes(arr[1])) {
                  const candidate = [nums[key[0]], nums[key[1]], nums[arr[0]], nums[arr[1]]].sort((a, b) => a - b)
                  result = result.filter(numArr => {
                      if (numArr[0] === candidate[0] &&
                          numArr[1] === candidate[1] &&
                          numArr[2] === candidate[2] &&
                          numArr[3] === candidate[3]) {
                        return false
                      } else {
                        return true
                      }
                  })
                  result.push(candidate)
              }
          })
      }
  })
  return result
};


var fourSumRecursive = function(nums, target) {
  nums.sort((a, b) => a - b)
  return findKSums(nums, target, 4, 0)
};

function findKSums(arr, target, k, start) {
  if (k === 2) return findTwoSum(arr, target, start)
  const result = []
  for (let i = start; i <= arr.length - k; i++) {
      const curNum = arr[i]
      if (i === start || arr[i] !== arr[i - 1]) {
          const temp = findKSums(arr, target - curNum, k - 1, i + 1)
              if (temp.length > 0) {
                  temp.forEach(pair => {
                  result.push([...pair, curNum])
              })
          }
      }
  }
  return result
}

function findTwoSum(arr, target, start) {
  const result = []
  let lo = start
  let hi = arr.length - 1
  while (lo < hi) {
      const sum = arr[lo] + arr[hi]
      if (sum === target) {
          result.push([arr[lo], arr[hi]])
          lo = moveLo(arr, lo)
          hi = moveHi(arr, hi)
      } else if (sum < target) {
          lo = moveLo(arr, lo)
      } else {
          hi = moveHi(arr, hi)
      }
  }
  return result
}

function moveLo(arr, start) {
  let result = start + 1
  while (arr[result] === arr[result - 1]) result += 1
  return result
}

function moveHi(arr, start) {
  let result = start - 1
  while (arr[result] === arr[result + 1]) result -= 1
  return result
}
