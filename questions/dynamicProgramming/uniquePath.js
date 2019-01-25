var uniquePaths = function(m, n, row = 0, col = 0, memo = []) {
  if (row >= m || col >= n) return 0
  if (memo[row] === undefined) memo[row] = []
  if (memo[row][col] !== undefined) return memo[row][col]
  if (row === m - 1 && col === n - 1) return 1
  const right = uniquePaths(m, n, row, col + 1, memo)
  const down = uniquePaths(m, n, row + 1, col, memo)
  memo[row][col] = right + down
  return memo[row][col]
};
