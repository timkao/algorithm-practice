function triangle(grid) {
  if (grid.length === 1) return grid[0][0]
  const memo = [[grid[0][0]]]
  return grid[0][0] + calculate(grid, 1, 0, memo)
}

function calculate(grid, row, col, memo) {
  if (row === grid.length) return 0
  if (memo[row] === undefined) memo[row] = []
  if (memo[row][col] !== undefined) return memo[row][col]
  const left = grid[row][col] + calculate(grid, row + 1, col, memo)
  const right = grid[row][col + 1] + calculate(grid, row + 1, col + 1, memo)
  memo[row][col] = Math.min(left, right)
  return memo[row][col]
}
