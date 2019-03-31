/* eslint-disable */

var maxSlidingWindow = function(nums, k) {
  if (nums.length === 0 || k <= 0) return []
  const res = []
  let idx = 0
  const dequeue = []

  for (let i = 0; i < nums.length; i++) {

    // 確保當下的極大值，與即將加入的新值，在有效範圍K之內，若無則移除當下的極大值
    while (dequeue.length > 0 && dequeue[0] < i - k + 1) {
      dequeue.shift()
    }

    // 確保極大值會被擺在第一位，確保在dequeue之中的都是有效的可能極大值
    while (dequeue.length > 0 && nums[dequeue[dequeue.length - 1]] < nums[i]) {
      dequeue.pop()
    }

    // 加入新成員
    dequeue.push(i)

    // 在 k - 1 之後，每一輪都會產生一個我們要的極大值
    if (i >= k - 1) {
      res[idx] = nums[dequeue[0]]
      idx += 1
    }
  }
  return res
};
