var solve = function(board) {
  const visited = []
  const rows = board.length
  const cols = board[0].length
  for (let i = 0; i < rows; i++) {
      visited[i] = new Array(cols).fill(false)
  }

  for (let row = 0; row < rows; row++) {
      for (let col = 0; col < cols; col++) {
          if (!visited[row][col] && board[row][col] === 'O') {
              islinkedToBoarder(board, row, col, visited, false)
          }
      }
  }
  return board
};

function isLinkedToBoarder(board, row, col, visited, prevIsBoarder) {
  if (!isValidCell(board, row, col, visited)) return false
  visited[row][col] = true
  const selfLinkedToBoarder = isBoarderValidCell(board, row, col) || prevIsBoarder
  const rightLinkedToBoarder = isLinkedToBoarder(board, row, col + 1, visited, selfLinkedToBoarder)
  const leftLinkedToBoarder = isLinkedToBoarder(board, row, col - 1, visited, selfLinkedToBoarder)
  const botLinkedToBoarder = isLinkedToBoarder(board, row + 1, col, visited, selfLinkedToBoarder)
  const topLinkedToBoarder = isLinkedToBoarder(board, row - 1, col, visited, selfLinkedToBoarder)
  if (!selfLinkedToBoarder && !rightLinkedToBoarder && !leftLinkedToBoarder && !botLinkedToBoarder && !topLinkedToBoarder) {
      board[row][col] = 'X'
      return false
  }
  return true
}

function isValidCell(board, row, col, visited) {
  return row >= 0 && row < board.length && col >= 0 && col < board[0].length && board[row][col] === 'O' && !visited[row][col]
}

function isBoarderValidCell(board, row, col) {
  return row === 0 || row === board.length - 1 || col === 0 || col === board[0].length - 1
}
