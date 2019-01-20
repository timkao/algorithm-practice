/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permute = function(nums, acc = [], result = [], start = 0) {
  if (start >= nums.length) {
      result.push(acc.slice(0))  // key
      return result
  }
  for (var i = start; i < nums.length; i++) {
      const currCandidate = nums[i]
      acc.push(currCandidate)
      swap(nums, i, start)
      permute(nums, acc, result, start + 1)
      acc.pop() // key
      swap(nums, start, i) // key
  }
  return result
};

function swap(arr, idxA, idxB) {
  const temp = arr[idxA]
  arr[idxA] = arr[idxB]
  arr[idxB] = temp
}
