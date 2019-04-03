var maxIncreaseKeepingSkyline = function(grid) {
  const rows = grid.length
  const cols = grid[0].length
  let result = 0
  const rowsMax = new Array(rows).fill(Number.NEGATIVE_INFINITY)
  const colsMax = new Array(cols).fill(Number.NEGATIVE_INFINITY)
  for (let row = 0; row < rows; row++) {
      for (let col = 0; col < cols; col++) {
          const cell = grid[row][col]
          colsMax[col] = Math.max(colsMax[col], cell)
          rowsMax[row] = Math.max(rowsMax[row], cell)
      }
  }
  for (let i = 0; i < rows; i++) {
      for (let j = 0; j < cols; j++) {
          const curHeight = grid[i][j]
          result += Math.min(colsMax[j], rowsMax[i]) - curHeight
      }
  }
  return result
};
