const example = [
  [1, 0, 0, 1, 0],
  [1, 1, 1, 1, 0],
  [1, 0, 0, 1, 0],
  [1, 0, 0, 1, 1],
  [0, 0, 0, 0, 0]
]

const example2 = [[1,0,0,0],[1,1,1,0]]
const example3 = [[1,0,0,0],[1,1,0,0]]

/**
 * @param {number[][]} grid
 * @param {number[][]} hits
 * @return {number[]}
 */
var hitBricks = function(grid, hits) {
  // grid after all hit
  hits.forEach(hit => {
    const row = hit[0]
    const col = hit[1]
    const cell = grid[row][col]
    if (cell === 0) {
      grid[row][col] = -1
    } else {
      grid[row][col] = 0
    }
  })

  // dfs on the grid
  traverseGrid(grid)

  // add back bricks
  let result = []
  for (let i = hits.length - 1; i >= 0; i--) {
    const curHit = hits[i]
    const curRow = curHit[0]
    const curCol = curHit[1]
    if (grid[curRow][curCol] === 0) {
      grid[curRow][curCol] = 1
      if (curRow === 0 || isConnected(grid, curRow, curCol)) {
        result.unshift(dfsWithCount(grid, curRow, curCol) - 1)
      } else {
          result.unshift(0)
      }
    } else {
        result.unshift(0)
    }
  }
  return result
};

function traverseGrid(grid) {
  const firstRow = grid[0]
  for (let i = 0; i < firstRow.length; i++) {
    if (firstRow[i] === 1) {
        dfsWithCount(grid, 0, i)
    }
  }
}

function dfsWithCount(grid, row, col) {
  if (row < 0 || row >= grid.length || col < 0 || col > grid[0].length) return 0
  if (grid[row][col] !== 1) return 0
  grid[row][col] = 2
  return 1 + dfsWithCount(grid, row, col - 1) + dfsWithCount(grid, row + 1, col) + dfsWithCount(grid, row, col + 1)
}

function isConnected(grid, row, col) {
  if (grid[row + 1] !== undefined) {
    if (grid[row + 1][col] === 2) return true
  }
  if (grid[row - 1] !== undefined) {
    if (grid[row - 1][col] === 2) return true
  }
  if (grid[row][col - 1] === 2 || grid[row][col + 1] === 2) return true
  return false
}

console.log(hitBricks(example, [[1, 0], [2, 2], [1, 3]]))
console.log(hitBricks(example2, [[1, 0]]))
console.log(hitBricks(example3, [[1, 1], [1, 0]]))
