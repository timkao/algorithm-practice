/**
 * @param {string} s
 * @param {string} p
 * @return {boolean}
 */
var isMatch = function(s, p, basePointer = 0, strPointer = 0, memo = []) {
  if (basePointer >= p.length && strPointer >= s.length) return true
  if (basePointer >= p.length && strPointer < s.length) return false
  if (memo[basePointer] === undefined) memo[basePointer] = []
  if (memo[basePointer][strPointer] !== undefined) return memo[basePointer][strPointer]
  const base = p[basePointer]
  const currChar = s[strPointer]
  const wildCard = p[basePointer + 1] === '*' ? true : false
  if (basePointer < p.length && strPointer >= s.length && !wildCard) {
      memo[basePointer][strPointer] = false
      return false
  }
  if (base === '.' && !wildCard) return isMatch(s, p, basePointer + 1, strPointer + 1, memo)
  if (base === '.' && wildCard) {
      for (let j = 0; j <= s.length - strPointer; j++) {
          if (isMatch(s, p, basePointer + 2, strPointer + j, memo)) {
              memo[basePointer][strPointer] = true
              return true
          }
      }
      memo[basePointer][strPointer] = false
      return false
  }
  if (base !== currChar && !wildCard) {
      memo[basePointer][strPointer] = false
      return false
  }
  if (base !== currChar && wildCard) return isMatch(s, p, basePointer + 2, strPointer, memo)
  if (base === currChar && !wildCard) return isMatch(s, p, basePointer+ 1, strPointer + 1, memo)
  if (base === currChar && wildCard) {
      const tailingChar = countTail(strPointer, s, currChar)
      for (let i = 0; i <= tailingChar; i++) {
          if (isMatch(s, p, basePointer + 2, strPointer + i, memo)) {
              memo[basePointer][strPointer] = true
              return true
          }
      }
      memo[basePointer][strPointer] = false
      return false
  }
};

function countTail(start, targetStr, targetChar) {
  let result = 0
  while (targetStr[start] === targetChar) {
      result += 1
      start += 1
  }
  return result
}
