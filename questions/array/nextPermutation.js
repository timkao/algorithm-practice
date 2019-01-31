/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var nextPermutation = function(nums) {
  for (let i = nums.length - 2; i >= 0; i--) {
      const currNum = nums[i]
      let diff
      let swapIdx
      for (let j = nums.length - 1; j >= i + 1; j--) {
          const afterNum = nums[j]
          const currDiff = currNum - afterNum
          if (currDiff < 0) {
              if (diff === undefined || currDiff > diff) {
                  diff = currDiff
                  swapIdx = j
              }
          }
      }
      if (swapIdx !== undefined) {
          swap(nums, i, swapIdx)
          reverseRest(nums, i + 1, nums.length - 1)
          return
      }
  }
  nums.sort((a, b) => a - b)
};

function swap(arr, p1, p2) {
  const temp = arr[p1]
  arr[p1] = arr[p2]
  arr[p2] = temp
}

function reverseRest(arr, start, end) {
  while (start < end) {
      swap(arr, start, end)
      start += 1
      end -= 1
  }
}
