/**
 * @param {number[]} A
 * @return {number}
 */
var numberOfArithmeticSlices = function(A) {
  const globalCount = {count: 0}
  checkSlices(A, 0, globalCount)
  return globalCount.count
};

function checkSlices(nums, start, result) {
  if (nums.length - start < 3) return false
  if (nums.length - start === 3) {
      if (isValid(nums, start, nums.length - 1)) {
          result.count += 1
          return [start, start + 2]
      }
      return false
  }
  const closestSlice = checkSlices(nums, start + 1, result)
  if (isValid(nums, start, start + 2)) {
      if (closestSlice !== false) {
          result.count += (closestSlice[1] - start - 1)
          return [start, closestSlice[1]]
      } else {
          result.count += 1
          return [start, start + 2]
      }
  }
  return false
}


function isValid(arr, start, end) {
let diff = arr[start + 1] - arr[start]
for (var i = start + 1; i <= end; i++) {
    if (arr[i] - arr[i -1] !== diff) return false
}
return true
}
