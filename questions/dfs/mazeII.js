var shortestDistance = function(maze, start, destination) {
  const dists = []
  const rows = maze.length
  const cols = maze[0].length
  const moves = [[1, 0], [-1, 0], [0, 1], [0, -1]]
  for (let i = 0; i < rows; i++) {
      dists[i] = new Array(cols).fill(Number.POSITIVE_INFINITY)
  }
  dists[start[0]][start[1]] = 0
  dfsUpdateMin(maze, start[0], start[1])
  const result = dists[destination[0]][destination[1]]
  return result === Number.POSITIVE_INFINITY ? -1 : result

  function dfsUpdateMin(grid, row, col) {
      if (row === destination[0] && col === destination[1]) return
      for (let j = 0; j < moves.length; j++) {
          const nextPos = moving(maze, row, col, moves[j])
          if (dists[row][col] + nextPos[2] < dists[nextPos[0]][nextPos[1]]) {
              dists[nextPos[0]][nextPos[1]] = dists[row][col] + nextPos[2]
              dfsUpdateMin(grid, nextPos[0], nextPos[1])
          }
      }
  }

  function moving(grid, row, col, move) {
      let distance = 0
      while (isValid(grid, row, col, move)) {
          row += move[0]
          col += move[1]
          distance += 1
      }
      return [row, col, distance]
  }

  function isValid(grid, row, col, move) {
      const newRow = row + move[0]
      const newCol = col + move[1]
      return newRow >= 0 && newRow < rows && newCol >= 0 && newCol < cols && grid[newRow][newCol] === 0
  }
};
