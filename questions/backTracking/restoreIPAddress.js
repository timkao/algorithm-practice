/**
 * @param {string} s
 * @return {string[]}
 */
var restoreIpAddresses = function(s, periods = 3, start = 0, acc = [], result = []) {
  if (periods === 0) {
      const lastStr = s.slice(start, s.length)
      if (isValidNum(lastStr)) {
          acc.push(lastStr)
          result.push(acc.join("."))
          acc.pop()
      }
      return result
  }
  for (var i = 0; i < 3; i++) {
      const subStr = s.slice(start, start + i + 1)
      if (isValidNum(subStr)) {
          acc.push(subStr)
          restoreIpAddresses(s, periods - 1, start + i + 1, acc, result)
          acc.pop()
      }
  }
  return result
};

function isValidNum(str) {
  if (str === '') return false
  if (str[0] === '0' && str.length > 1) return false
  const num = Number(str)
  return num >= 0 && num <= 255
}
