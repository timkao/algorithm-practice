/**
 * @param {number[]} nums
 * @return {number}
 */
var maxProduct = function(nums) {
  const zeros = []
  for (var i = 0; i < nums.length; i++) {
      const curNum = nums[i]
      if (curNum === 0) zeros.push(i)
  }
  if (zeros.length === 0) return findMax(nums)
  let result = Number.NEGATIVE_INFINITY;
  let start = 0
  for (var j = 0; j <= zeros.length; j++) {
    let curIdx
    if (j === zeros.length) {
      curIdx = nums.length
    } else {
      curIdx = zeros[j]
    }
    const subArr = nums.slice(start, curIdx)
    result = Math.max(result, findMax(subArr))
    start = curIdx + 1
  }
  if (result < 0) return 0
  return result
};

function findMax(nums) {
  if (nums.length === 0) return 0
  if (nums.length === 1) return nums[0]
  const minus = []
  for (var i = 0; i < nums.length; i++) {
      const curNum = nums[i]
      if (curNum < 0) minus.push(i)
  }
  return findProductWithoutZero(minus, nums)
}

function findProductWithoutZero(idxArr, nums) {
  if (idxArr.length % 2 === 0) return nums.reduce((acc, num) => acc * num, 1)
  const removeTheFirstIdx =
      Math.max(calculateProducts(nums, 0, idxArr[0] - 1), calculateProducts(nums, idxArr[0] + 1, nums.length - 1))
  const removeTheLastIdx =
      Math.max(calculateProducts(nums, 0, idxArr[idxArr.length - 1] - 1), calculateProducts(nums, idxArr[idxArr.length - 1] + 1, nums.length - 1))
  return Math.max(removeTheFirstIdx, removeTheLastIdx)
}

function calculateProducts(nums, start, end) {
  if (start > end) return Number.NEGATIVE_INFINITY
  let result = 1
  for (var i = start; i <= end; i++) {
      result *= nums[i]
  }
  return result
}

console.log(maxProduct([-2, -1, -3, 2]));
console.log(maxProduct([-2, 0, -1]));
console.log(maxProduct([2, 3, -2, 4]));
console.log(maxProduct([2, 3, -2, 4]));
console.log(maxProduct([-5, 0, 7, -2, 0, 0, 9, -1, 2]));
