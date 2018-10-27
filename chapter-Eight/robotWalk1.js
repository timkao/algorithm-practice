const grid = [
  [true, false, true],
  [true, true, true],
  [true, true, false],
  [false, true, true],
  [true, true, true]
  ];

function robotWalk(grid) {
  const path = [];
  const failedPath = [];
  if (grid.length === 0 || grid[0].length === 0) {
    return false;
  }
  if (getPath(grid, grid.length - 1, grid[0].length - 1, path, failedPath)) {
    return path;
  }
  return false;
}

function getPath(grid, row, column, path, failedPath) {
  if (!grid[row][column] || row < 0 || column < 0) {
    return false;
  }

  for (var i = 0; i < failedPath.length; i++) {
    if (failedPath[i][0] === row && failedPath[i][1] === column ) {
      return false;
    }
  }

  let isOrigin = false;
  if (row === 0 && column === 0) { isOrigin = true}

  if (isOrigin || getPath(grid, row, column - 1, path, failedPath) || getPath(grid, row - 1, column, path, failedPath)) {
    path.push([row, column])
    return true
  }


  failedPath.push([row, column]);
  return false;

}

console.log(robotWalk(grid))
