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
