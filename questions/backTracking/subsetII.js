var subsetsWithDup = function(nums) {
  nums.sort((a, b) => a - b)
  return dfs(nums)

  function dfs(arr, acc = [], result = [], start = 0) {
      result.push(acc.slice())
      for (let i = start; i < nums.length; i++) {
          if (i > start && nums[i] === nums[i - 1]) continue
          acc.push(nums[i])
          dfs(nums, acc, result, i + 1)
          acc.pop()
      }
      return result
  }

};
