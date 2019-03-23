var threeSum = function(nums) {
  nums.sort((a, b) => a - b)
  const result = []
  for (let i = 0; i < nums.length; i++) {
      if (i === 0 || nums[i] !== nums[i - 1]) {
          const target = -nums[i]
          let lo = i + 1
          let hi = nums.length - 1
          while (lo < hi) {
              if (lo - 1 !== i && nums[lo] === nums[lo - 1]) {
                  lo += 1
                  continue
              }
              if (nums[hi] === nums[hi + 1]) {
                  hi -= 1
                  continue
              }

              const sum = nums[lo] + nums[hi]
              if (sum === target) {
                  result.push([nums[i], nums[lo], nums[hi]])
                  lo += 1
                  hi -= 1
              } else if (sum < target) {
                  lo += 1
              } else {
                  hi -= 1
              }
          }
      }
  }
  return result
};
