var minAreaRect = function(points) {
  const board = buildBoard(points)
  const sortedRow = Object.keys(board).map(key => Number(key)).sort((a, b) => a - b)
  const colDp = []
  let result = null
  for (let i = 0; i < sortedRow.length; i++) {
      const currRowNum = sortedRow[i]
      const currRow = board[currRowNum]
      if (currRow.length < 2) continue
      for (let j = 0; j < currRow.length - 1; j++) {
          for (let k = j + 1; k < currRow.length; k++) {
              const fromCol = currRow[j]
              const toCol = currRow[k]
              if (colDp[fromCol] === undefined) colDp[fromCol] = []
              if (colDp[fromCol][toCol] === undefined) {
                  colDp[fromCol][toCol] = currRowNum
              } else {
                  const currArea = calculateArea(colDp[fromCol][toCol], currRowNum, fromCol, toCol)
                  if (result === null) {
                    result = currArea
                  } else {
                      result = Math.min(result, currArea)
                  }
                  colDp[fromCol][toCol] = currRowNum
              }
          }
      }
  }
  return result
};

function calculateArea(fromRow, toRow, fromCol, toCol) {
  return (toRow - fromRow) * (toCol - fromCol)
}

function buildBoard(points) {
  const result = {}
  points.forEach(point => {
      const row = point[0]
      const col = point[1]
      if (result[row] === undefined) {
          result[row] = [col]
      } else {
          result[row].push(col)
      }
  })
  for (key in result) {
      result[key].sort((a, b) => a - b)
  }
  return result
}
