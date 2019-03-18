/*
  [
    [8, 4, 7],
    [6, 5, 9]
  ]
*/

function findMaxMin(grid) {
  let result = Number.NEGATIVE_INFINITY;
  let min = Number.POSITIVE_INFINITY;
  const targetRow = grid.length - 1
  const targetCol = grid[0].length - 1
  dfs(grid, 0, 0, min)
  return result

  function dfs(matrix, row, col, localMin) {
    if (row > targetRow || col > targetCol) return
    if (row === targetRow && col === targetCol) {
      localMin = Math.min(matrix[row][col], localMin)
      result = Math.max(result, localMin)
      return
    }
    localMin = Math.min(matrix[row][col], localMin)
    dfs(matrix, row + 1, col, localMin)
    dfs(matrix, row, col + 1, localMin)
  }
}

const example = [
  [8, 4, 7],
  [7, 5, 5],
  [7, 3, 8]
]

console.log(findMaxMin(example))

/*
  DP
  transition: Math.max(Math.min(dp[i][j - 1], matrix[i][j]), Math.min(dp[i - 1][j], matrix[i][j]))
*/

function findMaxMinDp(grid) {
  const dp = []
  const rows = grid.length
  const cols = grid[0].length
  dp[0] = [grid[0][0]]
  for (let col = 1; col < cols; col++) {
    dp[0][col] = Math.min(grid[0][col], dp[0][col - 1])
  }
  for (let row = 1; row < rows; row++) {
    if (dp[row] === undefined) dp[row] = []
    dp[row][0] = Math.min(grid[row][0], dp[row - 1][0])
  }
  for (let i = 1; i < rows; i++) {
    for (let j = 1; j < cols; j++) {
      dp[i][j] = Math.max(Math.min(dp[i - 1][j], grid[i][j]), Math.min(dp[i][j - 1], grid[i][j]))
    }
  }
  return dp[rows - 1][cols - 1]
}

console.log(findMaxMinDp(example))
