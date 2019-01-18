/**
 * @param {number} n
 * @param {number} k
 * @return {number[][]}
 */
var combine = function(n, k, acc = [], result = [], start = 1) {
  if (k === 0) {
      result.push(acc.slice(0))
      return result
  }
  for (var i = start; i <= n - k + 1; i++) {
      acc.push(i)
      combine(n, k - 1, acc, result, i + 1)
      acc.pop()
  }
  return result
};
