const ex1 = [12, -5, 3, 9, -5]
const ex2 = [15, 6, -9, -14, 20, -9, 6, -3, 17]

function maxSubSequence(nums) {
  let maxSum = Number.NEGATIVE_INFINITY
  let currSum = 0
  let start = 0
  let end = 0
  let pos = [null, null]
  for (var i = 0; i < nums.length; i++) {
    const currNum = nums[i]
    currSum += currNum
    if (currSum > maxSum) {
      maxSum = currSum
      end = i
      pos = [start, end]
    }
    if (currSum < 0) {
      currSum = 0
      start = i + 1
    }
  }
  return {pos, maxSum}
}

console.log(maxSubSequence(ex1))
console.log(maxSubSequence(ex2))
