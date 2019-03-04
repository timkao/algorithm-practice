var sortColors = function(nums) {
  let bot = 0
  let mid = 0
  let top = nums.length - 1

  while (mid <= top) {
      if (nums[mid] === 0) {
          swap(nums, mid, bot)
          mid += 1
          bot += 1
      } else if (nums[mid] === 1) {
          mid += 1
      } else {
          swap(nums, mid, top)
          top -= 1
      }
  }
};

function swap(arr, p1, p2) {
  const temp = arr[p1]
  arr[p1] = arr[p2]
  arr[p2] = temp
}
