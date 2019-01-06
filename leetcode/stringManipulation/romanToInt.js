/**
 * @param {string} s
 * @return {number}
 */

const romanMap = {
  I: 1,
  V: 5,
  X: 10,
  L: 50,
  C: 100,
  D: 500,
  M: 1000,
}

var romanToInt = function(s) {
  if (s.length === 1) return romanMap[s]
  let result = 0
  for (var i = 0; i < s.length; i++) {
      const currPt = i
      const nextPt = i + 1
      const currNum = romanMap[s[currPt]]
      if (nextPt === s.length) {
          result += romanMap[s[currPt]]
      } else {
          const nextNum = romanMap[s[nextPt]]
          if (currNum < nextNum) {
              result -= currNum
          } else {
              result += currNum
          }
      }
  }
  return result
};
