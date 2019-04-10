var verifyPreorder = function(preorder) {
  let curRoot = preorder[1]
  for (let i = 2; i < preorder.length; i++) {
      const num = preorder[i]
      if (num < curRoot && !isValid(preorder, num, i - 2, curRoot)) return false
      curRoot = num
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

var verifyPreorderOpt = function(preorder) {
  let low = Number.MIN_SAFE_INTEGER;
  let stack = [];
  for(let i=0; i<preorder.length; i++){
      let num = preorder[i];
      if(num < low) return false; // should not go back to previous leftSubtree
      while(stack.length > 0 && num > stack[stack.length - 1]){
          low = stack.pop(); // figure out which leftSubtree to be under
      }
      stack.push(num);
  };
  return true;
};
