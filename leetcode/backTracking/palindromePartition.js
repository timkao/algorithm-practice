/**
 * @param {string} s
 * @return {string[][]}
 */
var partition = function(s, acc = [], result = [], start = 0) {
  if (start >= s.length) {
      result.push(acc.slice(0))
      return result
  }
  for (var i = start; i < s.length; i++) {
      const subStr = s.slice(start, i + 1)
      if (isPalin(subStr)) {
          acc.push(subStr)
          partition(s, acc, result, i + 1)
          acc.pop()
      }
  }
  return result
};

function isPalin(str) {
  let begin = 0
  let end = str.length - 1
  while (begin <= end) {
      const leftLetter = str[begin]
      const rightLetter = str[end]
      if (leftLetter !== rightLetter) return false
      begin += 1
      end -= 1
  }
  return true
}
