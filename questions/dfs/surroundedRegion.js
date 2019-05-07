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


var solveOpt = function(board) {
  if (board.length === 0 || board[0].length === 0) return board
  const rows = board.length
  const cols = board[0].length

  for (let col = 0; col < cols; col++) {
      if (board[0][col] === 'O') {
          dfsFlip(board, 0, col)
      }
      if (board[rows - 1][col] === 'O') {
          dfsFlip(board, rows - 1, col)
      }
  }

  for (let row = 0; row < rows; row++) {
      if (board[row][0] === 'O') {
          dfsFlip(board, row, 0)
      }
      if (board[row][cols - 1] === 'O') {
          dfsFlip(board, row, cols - 1)
      }
  }

  for (let i = 0; i < rows; i++) {
      for (let j = 0; j < cols; j++) {
          const cell = board[i][j]
          if (cell === '1') {
              board[i][j] = 'O'
          } else if (cell === 'O') {
              board[i][j] = 'X'
          }

      }
  }
  return board
};


function dfsFlip(board, row, col) {
  if (!isValid(board, row, col)) return
  board[row][col] = '1'
  dfsFlip(board, row + 1, col)
  dfsFlip(board, row - 1, col)
  dfsFlip(board, row, col + 1)
  dfsFlip(board, row, col - 1)
}

function isValid(board, row, col) {
  return row >= 0 && row < board.length && col >= 0 && col < board[0].length && board[row][col] === 'O'
}
