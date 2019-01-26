/**
 * @param {number} n
 * @return {number}
 */
var integerBreak = function(n, memo = []) {
  if (n === 2) return 1
  if (n === 1) return 1
  if (memo[n] !== undefined) return memo[n]
  let result = Number.NEGATIVE_INFINITY
  for (let i = 1; i < n; i++) {
      const temp = Math.max(i * integerBreak(n - i, memo), i * (n - i))
      if (temp > result) result = temp
  }
  memo[n] = result
  return result
};

var integerBreakDP = function(n) {
  const dp = [0, 0, 1]
  for (let i = 3; i <= n; i++) {
      const mid = Math.floor(i / 2)
      const temp = i % 2 === 0 ? mid * mid : mid * (mid + 1)
      let biggest = Number.NEGATIVE_INFINITY
      for (let j = 1; j < i; j++) {
          if (j * dp[i - j] > biggest) biggest = j * dp[i - j]
      }
      dp[i] = Math.max(biggest, temp)
  }
  return dp[n]
};
