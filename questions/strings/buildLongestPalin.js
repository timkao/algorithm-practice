var longestPalindrome = function(s) {
  const countMap = {}
  let result = 0

  for (let i = 0; i < s.length; i++) {
      const curChar = s[i]
      if (countMap[curChar] === undefined) {
          countMap[curChar] = 1
      } else {
          countMap[curChar] += 1
      }
  }

  let hasOdd = false
  Object.keys(countMap).forEach(strKey => {
      const curCount = countMap[strKey]
      if (curCount % 2 === 0) {
          result += curCount
      } else {
          result += curCount - 1
          hasOdd = true
      }
  })
  return hasOdd ? result + 1 : result
};
