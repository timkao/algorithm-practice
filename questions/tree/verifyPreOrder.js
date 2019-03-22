var verifyPreorder = function(preorder) {
  let curRoot = preorder[1]
  for (let i = 2; i < preorder.length; i++) {
      const num = preorder[i]
      if (num > curRoot) {
          curRoot = num
      } else {
          if (!isValid(preorder, num, i - 2, curRoot)) return false
          curRoot = num
      }
  }
  return true
};

function isValid(numArr, num, begin, parent) {
  while (begin >= 0) {
      if (numArr[begin] < parent && numArr[begin] > num) return false
      begin -= 1
  }
  return true
}
