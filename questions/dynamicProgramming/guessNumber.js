/**
 * @param {number} n
 * @return {number}
 */
var getMoneyAmount = function(n) {
  return findAmount(1, n)
};

function findAmount(start, end, memo = []) {
  if (start >= end) return 0
  if (memo[start] === undefined) memo[start] = []
  if (memo[start][end] !== undefined) return memo[start][end]
  let result = Number.POSITIVE_INFINITY
  for (let i = start; i <= end; i++) {
      const left = findAmount(start, i - 1, memo)
      const right = findAmount(i + 1, end, memo)
      const temp = i + Math.max(left, right) // bad luck
      if (temp < result) result = temp // smart guessing
  }
  memo[start][end] = result
  return result
}
