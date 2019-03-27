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


var fourSumOpt = function(nums, target) {
    nums.sort((a, b) => a - b)
    return findKSums(nums, target, 4, 0)
  };

  function findKSums(arr, target, k, start) {
    if (k === 2) return findSum(arr, target, start)
    const result = []
    for (let i = start; i < arr.length; i++) {
      if (i === start || arr[i] !== arr[i - 1]) {
        const temp = findKSums(arr, target - arr[i], k - 1, i + 1)
        if (temp.length > 0) {
           temp.forEach(pair => {
             result.push([arr[i], ...pair])
           })
        }
      }
    }
    return result
  }

  function findSum(arr, target, start) {
    const result = []
    let lo = start
    let hi = arr.length - 1
    while (lo < hi) {
      if (lo !== start && arr[lo] === arr[lo - 1]) {
        lo += 1
        continue
      }
      if (arr[hi] === arr[hi + 1]) {
        hi -= 1
        continue
      }
      const sum = arr[lo] + arr[hi]
      if (sum === target) {
        result.push([arr[lo], arr[hi]])
        lo += 1
        hi -= 1
      } else if (sum < target) {
        lo += 1
      } else {
        hi -= 1
      }
    }
    return result
  }
