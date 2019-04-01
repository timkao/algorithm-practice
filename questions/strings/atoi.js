/* eslint-disable */
var myAtoi = function(str) {
  const nums = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0']
  const signs = ['+', '-']
  let foundFirst = false
  let isNegative = false
  let acc = ''
  let signsCount = 0
  for (let i = 0; i < str.length; i++) {
      const curChar = str[i]
      if (signs.includes(curChar)) signsCount += 1
      if (!nums.includes(curChar) && curChar !== ' ' && !foundFirst && curChar !== '+' && curChar !== '-') return 0

      if (foundFirst && !nums.includes(curChar)) break

      if (nums.includes(curChar) && !foundFirst) {
          foundFirst = true
          if (signsCount > 1) return 0
          if (i > 0 && str[i - 1] === '-') isNegative = true
          if (i > 0 && !signs.includes(str[i - 1]) && signsCount >= 1) return 0
          acc += curChar
      } else if (nums.includes(curChar) && foundFirst) {
          acc += curChar
      }
  }
  const result = Number(acc)
  if (result > Math.pow(2, 31) - 1 && isNegative) return -2147483648
  if (result > Math.pow(2, 31) - 1 && !isNegative) return 2147483647
  if (isNegative) return -result
  return result
};
