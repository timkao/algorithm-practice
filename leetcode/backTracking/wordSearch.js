/**
 * @param {character[][]} board
 * @param {string} word
 * @return {boolean}
 */
var exist = function(board, word) {
  const visited = generateVisited(board)
  for (var i = 0; i < board.length; i++) {
      for (var j = 0; j < board[0].length; j++) {
          if (board[i][j] === word[0]) {
              visited[i][j] = true
              const checkWord = hasWord(board, word, i, j, visited, 1)
              if (checkWord === true) return true
              visited[i][j] = false
          }
      }
  }
  return false
};

function generateVisited(grid) {
  const result = []
  for (var i = 0; i < grid.length; i++) {
      if (result[i] === undefined) {
          result[i] = []
      }
      for (var j = 0; j < grid[0].length; j++) {
          result[i][j] = false
      }
  }
  return result
}

function hasWord(grid, word, row, col, visited, start) {
  if (start >= word.length) return true
  const directions = [[row, col - 1], [row, col + 1], [row - 1, col], [row + 1, col]]
  for (var i = 0; i < directions.length; i++) {
      const curRow = directions[i][0]
      const curCol = directions[i][1]
      const neighbor = validCell(grid, curRow, curCol, visited) ? grid[curRow][curCol] : null
      if (neighbor === word[start]) {
          visited[curRow][curCol] = true
          const hasIt = hasWord(grid, word, curRow, curCol, visited, start + 1)
          if (hasIt === true) return true
          visited[curRow][curCol] = false
      }
  }
  return false
}

function validCell(grid, row, col, visited) {
  return row < grid.length && col < grid[0].length
    && row >= 0 && col >= 0 && !visited[row][col]
}
