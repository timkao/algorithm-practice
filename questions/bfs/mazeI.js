var hasPath = function(maze, start, destination) {
  const dists = []
  for (let i = 0; i < maze.length; i++) {
      dists[i] = new Array(maze[0].length).fill(Number.POSITIVE_INFINITY)
  }
  dists[start[0]][start[1]] = 0
  const moves = [[-1, 0], [1, 0], [0, -1], [0, 1]]
  let queue = [start]

  while (queue.length > 0) {
      const curPos = queue.shift()
      for (let k = 0; k < moves.length; k++) {
          const newPos = moving(maze, curPos, moves[k])
          if (dists[curPos[0]][curPos[1]] + newPos[2] < dists[newPos[0]][newPos[1]]) {
              dists[newPos[0]][newPos[1]] = dists[curPos[0]][curPos[1]] + newPos[2]
              queue.push(newPos)
          }
      }
  }
  return dists[destination[0]][destination[1]] !== Number.POSITIVE_INFINITY

  function moving(grid, pos, direction) {
      const result = [pos[0], pos[1]]
      let distance = 0
      while (isValid(grid, result, direction)) {
          result[0] += direction[0]
          result[1] += direction[1]
          distance += 1
      }
      result[2] = distance
      return result
  }

  function isValid(grid, pos, direction) {
      const row = pos[0] + direction[0]
      const col = pos[1] + direction[1]
      return row >= 0 && row < grid.length && col >= 0 && col < grid[0].length
          && grid[row][col] !== 1
  }

};
