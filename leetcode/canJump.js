function canJump(arr) {
  let lastPosition = arr.length - 1;
  for (var i = arr.length - 1; i >= 0; i--) {
    if (i + arr[i] >= lastPosition) {
      lastPosition = i
    }
  }
  return lastPosition === 0;
}

/*
  my slow and more complicated solution but showcase the use of recursion and memorization
*/

function canJump2(nums, memo = [], prevIndex = 0) {
  if (nums.length <= 1) { return true }
  const currEnd = nums.length;
  let currValue = nums.shift();
  if (currValue === 0) { return false }
  if (currValue + 1 >= currEnd) { return true }
  if (memo[prevIndex] !== undefined) { return memo[prevIndex] }

    while (currValue > 0) {
      let temp = canJump2(nums.slice(currValue - 1, nums.length), memo, prevIndex + currValue - 1)
      if (temp === true) {
        memo[prevIndex] = true;
        return true
      }
      currValue--
    }
  memo[prevIndex] = false;
  return false
}
