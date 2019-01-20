/*
Given a sorted array nums, remove the duplicates in-place such that each element appear only once and return the new length.

Do not allocate extra space for another array, you must do this by modifying the input array in-place with O(1) extra memory.
*/

var removeDuplicate = function (nums) {
  if (nums.length === 1) { return 1 }
  var begin = 0;
  while (begin < nums.length - 1) {
    var oneAhead = begin + 1;
    if (nums[begin] === nums[oneAhead]) {
      nums.splice(begin, 1);
    } else {
      begin++
    }
  }
  return nums.length;
}

console.log(removeDuplicate([1, 1, 2]))
console.log(removeDuplicate([0, 0, 1, 1, 1, 2, 2, 3, 3, 4]))
