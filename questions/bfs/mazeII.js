var shortestDistance = function(maze, start, destination) {
  const moves = [[-1, 0], [1, 0], [0, -1], [0, 1]]
  return findShortestDist(maze, start, destination)

  function findShortestDist(grid, begin, end) {
    const rows = grid.length
    const cols = grid[0].length
    const dist = []
    for (let i = 0; i < rows; i++) {
      dist[i] = new Array(cols).fill(Number.POSITIVE_INFINITY);
    }
    dist[begin[0]][begin[1]] = 0
    const queue = []
    queue.push(begin)
    while (queue.length > 0) {
      const pos = queue.pop()
      for (let j = 0; j < 4; j++) {
        const newPos = move(j, pos[0], pos[1], grid)
        const totalDist = dist[pos[0]][pos[1]] + newPos[2]

        // if we do not move, the newPos[2] is zero
        if (totalDist < dist[newPos[0]][newPos[1]]) {
          dist[newPos[0]][newPos[1]] = totalDist
          if (newPos[0] === end[0] && newPos[1] === end[1]) {
            continue
          }
          queue.push(newPos)
        }
      }
    }
    return dist[end[0]][end[1]] === Number.POSITIVE_INFINITY ? -1 : dist[end[0]][end[1]]
}

function move(dir, row, col, grid) {
  const pos = [row, col, 0]

  // constantly move in the same direction until we cannot move anymore...
  while (isValid(grid, pos[0] + moves[dir][0], pos[1] + moves[dir][1])) {
    pos[0] += moves[dir][0]
    pos[1] += moves[dir][1]
    pos[2] += 1
  } // if the new position is not valid, we do not move.
  return pos
}

function isValid(grid, row, col) {
  return row >= 0 && row < grid.length
    && col >= 0 && col < grid[0].length && grid[row][col] !== 1
}


};
