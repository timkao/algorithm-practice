const sudokuBoard = [
  [0, 0, 0, 0, 0, 0, 0, 1, 2],
  [0, 0, 0, 0, 3, 5, 0, 0, 0],
  [0, 0, 0, 6, 0, 0, 0, 7, 0],
  [7, 0, 0, 0, 0, 0, 3, 0, 0],
  [0, 0, 0, 4, 0, 0, 8, 0, 0],
  [1, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 1, 2, 0, 0, 0, 0],
  [0, 8, 0, 0, 0, 0, 0, 4, 0],
  [0, 5, 0, 0, 0, 0, 6, 0, 0],
]


function rowOccupied(board, row, occupied) {
  const currRow = board[row]
  currRow.forEach(ele => {
    if (ele !== 0) {
      occupied[ele] = true
    }
  })
}

function colOccupied(board, col, occupied) {
  board.forEach(ele => {
    if (ele[col] !== 0) {
      occupied[ele[col]] = true
    }
  })
}

function findStartPoint(row, col) {
  return [Math.floor(row / 3) * 3, Math.floor(col / 3) * 3]
}

function areaOccupied(board, row, col, occupied) {
  const areaStartPoint = findStartPoint(row, col)
  const baseRow = areaStartPoint[0]
  const baseCol = areaStartPoint[1]
  for (var extraRow = 0; extraRow < 3; extraRow++) {
    for (var extraCol = 0; extraCol < 3; extraCol++) {
      const currCol = baseCol + extraCol
      const currRow = baseRow + extraRow
      if (board[currRow][currCol] !== 0 && currCol !== col && currRow !== row) {
        occupied[board[currRow][currCol]] = true
      }
    }
  }
}

function constructCandidates(board) {
  let boolCandidates = []
  let emptySquare = null
  let countOccupied = 1
  for (var row = 0; row < 9; row++) {
    for (var col = 0; col < 9; col++) {
      if (board[row][col] === 0) {
        const occupied = [true, false, false, false, false, false, false, false, false, false]
        rowOccupied(board, row, occupied)
        colOccupied(board, col, occupied)
        areaOccupied(board, row, col, occupied)
        let currOccupiedCount = 0
        occupied.forEach(bool => {
          if (bool) {
            currOccupiedCount += 1
          }
        })
        if (currOccupiedCount > countOccupied) {
          countOccupied = currOccupiedCount
          boolCandidates = occupied
          emptySquare = [col, row]
        }
      }
    }
  }
  const candidates = []
  boolCandidates.forEach((bool, idx) => {
    if (!bool) {
      candidates.push(idx)
    }
  })
  return {candidates, emptySquare}
}

function processSolution(board, result) {
  const temp = [[], [], [], [], [], [], [], [], []]
  /* cannot do board.slice() since what inside board are Arrays. board.slice()[1][2] will point to the same place as board[1][2] */
  for (var row = 0; row < 9; row++) {
    for (var col = 0; col < 9; col++) {
      temp[row][col] = board[row][col]
    }
  }
  result.push(temp)
}

function isSolution(freeCount) {
  return freeCount === 0
}

function sudoku(board, freeCount, result = []) {
  if (isSolution(freeCount)) {
    processSolution(board, result)
    return
  } else {
    const {candidates, emptySquare} = constructCandidates(board)
    for (var i = 0; i < candidates.length; i++) {
      board[emptySquare[1]][emptySquare[0]] = candidates[i]
      sudoku(board, freeCount - 1, result)
      board[emptySquare[1]][emptySquare[0]] = 0
    }
  }
  return result
}

console.log(sudoku(sudokuBoard, 64))
