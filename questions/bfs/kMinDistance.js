const assert = require('assert')

function findMinDist(grid) {
  const rows = grid.length
  const cols = grid[0].length
  let queue = [[0, 0]]
  let nextQueue = []
  let steps = 0
  const visited = []
  for (let i = 0; i < rows; i++) {
    visited[i] = []
  }
  const moves = [[-1, 0], [1, 0], [0, -1], [0, 1]]
  while (queue.length > 0) {
    const curPos = queue.shift()
    const row = curPos[0]
    const col = curPos[1]
    if (grid[row][col] === 9) return steps
    for (let j = 0; j < moves.length; j++) {
      const nextRow = row + moves[j][0]
      const nextCol = col + moves[j][1]
      if (isValid(grid, rows, cols, nextRow, nextCol)) {
        nextQueue.push([nextRow, nextCol])
      }
    }
    if (queue.length === 0) {
      queue = nextQueue
      nextQueue = []
      steps += 1
    }
  }
  return -1
}

function isValid(grid, rows, cols, row, col) {
  return row < rows && col < cols && row >= 0 && col >= 0 && grid[row][col] !== 0
}

const example1 = [
  [1, 0, 0],
  [1, 0, 0],
  [1, 9, 1]
]

const example2 = [
  [1, 1, 1, 1],
  [0, 1, 1, 1],
  [0, 1, 0, 1],
  [1, 1, 9, 1],
  [0, 0, 1, 1],
]

const example3 = [
  [1, 1, 0, 9],
  [1, 1, 1, 1],
  [0, 1, 1, 1],
  [1, 1, 1, 1],
]

assert.equal(findMinDist(example1), 3)
assert.equal(findMinDist(example2), 5)
assert.equal(findMinDist(example3), 5)
