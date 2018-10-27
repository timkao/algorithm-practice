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

function walksFromBeginning(grid, start = [0, 0], path = [[0, 0]]) {
  const currRow = start[0]
  const currCol = start[1]
  if (currRow === grid.length - 1 && currCol === grid[0].length - 1) {
    return path
  }
  if (currRow + 1 <= grid.length - 1 && grid[currRow + 1][currCol] === true) {
    const downPath = path.concat([[currRow + 1, currCol]])
    const downResult = walksFromBeginning(grid, [currRow + 1, currCol], downPath)
    if (downResult !== undefined) return downResult
  }
  if (currCol + 1 <= grid[0].length - 1 && grid[currRow][currCol + 1] === true) {
    const rightPath = path.concat([[currRow, currCol + 1]])
    const rightResult = walksFromBeginning(grid, [currRow, currCol + 1], rightPath)
    if (rightResult !== undefined) return rightResult
  }
}

console.log(walksFromBeginning(exampleGrid))
console.log(walksFromBeginning(exampleGrid2))
