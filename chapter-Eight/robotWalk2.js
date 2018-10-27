const exampleGrid = [
  [true, true, true],
  [true, true, true],
  [true, true, true],
  [true, false, true],
  [true, false, true]
];

const exampleGrid2 = [
  [true, false, true],
  [true, true, true],
  [true, true, false],
  [false, true, true],
  [true, true, true]
];

function walksFromBeginning(grid, start = [0, 0], path = [[0, 0]], failedCells = []) {
  const currRow = start[0]
  const currCol = start[1]
  if (currRow === grid.length - 1 && currCol === grid[0].length - 1) {
    return path
  }

  /* the existence of failed Cells is for Memoization */
  failedCells.forEach(failedCell => {
    if (failedCell[0] === currRow && failedCell[1] === currCol) {
      return false
    }
  })

  if (currRow + 1 <= grid.length - 1 && grid[currRow + 1][currCol] === true) {
    const downPath = path.concat([[currRow + 1, currCol]])
    const downResult = walksFromBeginning(grid, [currRow + 1, currCol], downPath, failedCells)
    if (downResult !== false) return downResult
  }
  if (currCol + 1 <= grid[0].length - 1 && grid[currRow][currCol + 1] === true) {
    const rightPath = path.concat([[currRow, currCol + 1]])
    const rightResult = walksFromBeginning(grid, [currRow, currCol + 1], rightPath, failedCells)
    if (rightResult !== false) return rightResult
  }

  /* the existence of failed Cells is for Memoization */
  failedCells.push([currRow, currCol])

  return false
}

console.log(walksFromBeginning(exampleGrid))
console.log(walksFromBeginning(exampleGrid2))

function walksFromEnd(grid) {
  if (grid === null || grid.length === null) return null
  const path = []
  const failedPoints = []
  if (getPath(grid, grid.length - 1, grid[0].length - 1, path, failedPoints)) {
    return path
  }
  return null
}

function getPath(grid, row, col, path, failedPoints) {
  const currPoint = [row, col]
  if (row === 0 && col === 0) {
    path.push(currPoint)
    return true
  }
  if (col < 0 || row < 0 || !grid[row][col]) return false
  failedPoints.forEach(failedPoint => {
    if (failedPoint[0] === row && failedPoint[1] === col) return false
  })

  if (getPath(grid, row - 1, col, path, failedPoints)) {
    path.push(currPoint)
    return true
  }

  if (getPath(grid, row, col - 1, path, failedPoints)) {
    path.push(currPoint)
    return true
  }

  failedPoints.push(currPoint)
  return false
}

console.log(walksFromEnd(exampleGrid))
console.log(walksFromEnd(exampleGrid2))
