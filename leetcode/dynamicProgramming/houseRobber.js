var rob = function(nums, total = 0) {
  if (nums.length === 0) return total
  if (nums.length === 1) return total + nums[0]
  const pickThisOne = rob(nums.slice(2), total + nums[0])
  const notThisOne = rob(nums.slice(1), total)
  return Math.max(pickThisOne, notThisOne)
};

var robBetter = function(nums, start = 0) {
  if (start === nums.length) return 0
  if (start === nums.length - 1) return nums[start]
  const pickThisOne = nums[start] + rob(nums, start + 2)
  const notThisOne = rob(nums, start + 1)
  return Math.max(pickThisOne, notThisOne)
};

var robOpt = function(nums, start = 0, memo = {}) {
  if (start === nums.length) return 0
  if (start === nums.length - 1) return nums[start]
  if (memo[start] !== undefined) return memo[start]
  const pickThisOne = nums[start] + rob(nums, start + 2, memo)
  const notThisOne = rob(nums, start + 1, memo)
  memo[start] = Math.max(pickThisOne, notThisOne)
  return memo[start]
};
