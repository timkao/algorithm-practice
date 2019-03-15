var findDuplicate = function(nums) {
  let slow = nums[0]
  let fast = nums[0]
  while (true) {
      slow = nums[slow]
      fast = nums[nums[fast]]
      if (slow === fast) break
  }
  let pt1 = nums[0]
  let pt2 = slow
  // be care of the case when the duplicate is the first element
  while (pt1 !== pt2) {
      pt1 = nums[pt1]
      pt2 = nums[pt2]
  }
  return pt1
};
