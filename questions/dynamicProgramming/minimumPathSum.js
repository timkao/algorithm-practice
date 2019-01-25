var minPathSum = function(grid, row = 0, col = 0, memo = []) {
  if (row >= grid.length || col >= grid[0].length) return Number.POSITIVE_INFINITY
  if (memo[row] === undefined) memo[row] = []
  if (memo[row][col] !== undefined) return memo[row][col]
  const currNum = grid[row][col]
  if (row === grid.length - 1 && col === grid[0].length - 1) return currNum
  const right = currNum + minPathSum(grid, row, col + 1, memo)
  const down = currNum + minPathSum(grid, row + 1, col, memo)
  memo[row][col] = Math.min(right, down)
  return memo[row][col]
};
