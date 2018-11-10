function placeQueens(row = 0, columns = [], result = []) {
  if (row === 8) {
    result.push(columns.slice(0))
  } else {
    for (var col = 0; col < 8; col++) {
      if (checkValid(columns, row, col)) {
        columns[row] = col
        placeQueens(row + 1, columns, result)
      }
    }
  }
}

function checkValid(columns, row, col) {
  for (var prevRow = 0; prevRow < row; prevRow++) {
    const prevCol = columns[prevRow]
    if (prevCol === col) return false
    if (Math.abs(prevCol - col) === Math.abs(prevRow - row)) return false
  }
  return true
}
