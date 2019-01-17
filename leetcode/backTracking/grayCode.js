/**
 * @param {number} n
 * @return {number[]}
 */
var grayCode = function(n) {
  const start = []
  const result = []
  const memo = {}
  const targetSize = Math.pow(2, n)
  for (var i = 0; i < n; i++) {
      start.push(0)
  }
  const code = start.join('')
  result.push(code)
  memo[code] = true
  const codes = buildCodes(start, memo, result, targetSize)
  return codes.map(binStr => {
      let sum = 0
      let pow = 0
      for (var j = binStr.length - 1; j >= 0; j--) {
          if (binStr[j] === '1') {
              sum += Math.pow(2, pow)
          }
          pow += 1
      }
      return sum
  })
};

function buildCodes(arr, memo, result, targetLength) {
  if (result.length === targetLength) return result
  for (var i = 0; i < arr.length; i++) {
      arr[i] = arr[i] === 0 ? 1 : 0
      const code = arr.join('')
      if (memo[code] !== true) {
          result.push(code)
          memo[code] = true
          const route = buildCodes(arr, memo, result, targetLength)
          if (route !== null) return route
          result.pop()
          memo[code] = false
      }
      arr[i] = arr[i] === 0 ? 1 : 0
  }
  return null
}
