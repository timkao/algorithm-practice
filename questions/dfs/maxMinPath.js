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
  [8, 6, 7],
  [6, 5, 9],
  [5, 6, 10]
]

console.log(findMaxMin(example))
