var productExceptSelf = function(nums) {
  if (nums.length === 1) return nums

  let leftToRightAcc = 1
  let rightToLeftAcc = 1

  const leftToRightArr = nums.map(num => {
      leftToRightAcc = leftToRightAcc * num
      return leftToRightAcc
  })

  const rightToLeftArr = []

  for (let j = nums.length - 1; j >= 0; j--) {
      rightToLeftAcc = rightToLeftAcc * nums[j]
      rightToLeftArr[j] = rightToLeftAcc
  }

  const result = []
  result[0] = rightToLeftArr[1]
  result[nums.length - 1] = leftToRightArr[nums.length - 2]

  for (let i = nums.length - 2; i >= 1; i--) {
      result[i] = leftToRightArr[i - 1] * rightToLeftArr[i + 1]
  }
  return result
};

var productExceptSelfOpt = function(nums) {
  if (nums.length === 1) return nums
  const ans = []
  ans[nums.length - 1] = 1

  let rightAcc = 1
  for (let j = nums.length - 2; j >= 0; j--) {
      rightAcc = rightAcc * nums[j + 1]
      ans[j] = rightAcc
  }

  let leftAcc = 1
  for (let k = 1; k < ans.length; k++) {
      leftAcc = leftAcc * nums[k - 1]
      ans[k] = ans[k] * leftAcc
  }
  return ans
};
