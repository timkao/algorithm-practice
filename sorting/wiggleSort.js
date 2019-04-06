var wiggleSort = function(nums) {
  for (let i = 0; i < nums.length; i++) {
      const curNum = nums[i]
      const nextNum = nums[i + 1]
      if (i % 2 === 0 && nextNum < curNum || (i % 2 !== 0 && nextNum > curNum)) {
          swap(nums, i, i + 1)
      }
  }
  function swap(arr, pt1, pt2) {
      const temp = arr[pt1]
      arr[pt1] = arr[pt2]
      arr[pt2] = temp
  }
};
