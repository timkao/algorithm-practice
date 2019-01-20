/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permuteUnique = function(nums) {
  return generatePermute(nums, [], [], 0)
};

function generatePermute(nums, acc, result, start) {
  if (nums.length === acc.length) {
      result.push(acc.slice(0))
      return result
  }
  const visited = []
  for (var i = start; i < nums.length; i++) {
      const currNum = nums[i]
      if (!visited[currNum]) {
          acc.push(currNum)
          swap(nums, start, i)
          generatePermute(nums, acc, result, start + 1)
          swap(nums, i, start)
          acc.pop()
          visited[currNum] = true
      }
  }
  return result
}

function swap(arr, p1, p2) {
  const temp = arr[p1]
  arr[p1] = arr[p2]
  arr[p2] = temp
}
