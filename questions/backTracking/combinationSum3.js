/**
 * @param {number} k
 * @param {number} n
 * @return {number[][]}
 */
var combinationSum3 = function(k, n, acc = [], result = [], start = 1) {
  if ( k > 9 || n > 45) return result
  if (k === 0) {
      if (n === 0) {
          result.push(acc.slice(0))
      }
      return result
  }
  for (var i = start; i <= 9; i++) {
      if (n >= i) {
          acc.push(i)
          combinationSum3(k - 1, n - i, acc, result, i + 1)
          acc.pop()
      }
  }
  return result
};
