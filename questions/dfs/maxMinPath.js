/*
  [
    [8, 4, 7],
    [6, 5, 9]
  ]
*/

function findMaxMin(grid) {
  //let result = Number.NEGATIVE_INFINITY;
  const visited = []
  const targetRow = grid.length - 1
  const targetCol = grid[0].length - 1
  for (let i = 0; i < grid.length; i++) {
    visited[i] = []
  }
  return dfs(grid, 0, 0, [grid[0][0]])
  //return result

  function dfs(matrix, row, col, acc, result = []) {
    if (row === targetRow && col === targetCol) {
      result.push(acc.slice(0))
      return result
    }
    if (row + 1 <= targetRow) {
      acc.push(matrix[row + 1][col])
      dfs(matrix, row + 1, col, acc, result)
      acc.pop()
    }
    if (col + 1 <= targetCol) {
      acc.push(matrix[row][col + 1])
      dfs(matrix, row, col + 1, acc, result)
      acc.pop()
    }
    return result
  }
}

const example = [
  [8, 4, 7],
  [6, 5, 9],
  [5, 6, 10]
]

console.log(findMaxMin(example))
