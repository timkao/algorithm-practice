/**
 * @param {number[]} nums
 * @return {number}
 */
var longestConsecutive = function(nums) {
  const map = {}
  for (let i = 0; i < nums.length; i++) {
      if (map[nums[i]] === undefined) {
          map[nums[i]] = true
      }
  }
  let result = 0
  const allUniqueNums = Object.keys(map).map(num => Number(num))
  for (let j = 0; j < allUniqueNums.length; j++) {
      let currNum = allUniqueNums[j]
      let totalLength = 1
      if (map[currNum - 1] === undefined) { // beginning of the sequence, key concept!
          while (map[currNum + 1]) {
              totalLength += 1
              currNum += 1
          }
          if (result < totalLength) result = totalLength
      }
  }
  return result
};
