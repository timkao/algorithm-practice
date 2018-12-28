const exMatrix = [
  [0, 0, 1, 0, 0, 0],
  [0, 1, 1, 1, 0, 0],
  [0, 1, 0, 1, 0, 1],
  [1, 1, 1, 1, 0, 0],
  [0, 1, 1, 0, 0, 0],
  [0, 0, 0, 0, 0, 1],
]

const sizeMemo = [
  [false, false, false, false, false, false],
  [false, false, false, false, false, false],
  [false, false, false, false, false, false],
  [false, false, false, false, false, false],
  [false, false, false, false, false, false],
  [false, false, false, false, false, false],
];

function maxBlackSquare(matrix, memo, row = 0, col = 0) {
  if (row >= matrix.length || col >= matrix[0].length) return {pos: [row, col], size: 0}
  if (memo[row][col] !== false) return {pos: [row, col], size: memo[row][col]}
  let result = {pos: [null, null], size: 0}
  const currSquare = findSquare(matrix, row, col)
  if (currSquare.size > result.size) {
    result = currSquare
  }
  const leftSquare = maxBlackSquare(matrix, memo, row + 1, col)
  if (leftSquare.size > result.size) {
    result = leftSquare
  }
  const rightSquare = maxBlackSquare(matrix, memo, row, col + 1)
  if (rightSquare.size > result.size) {
    result = rightSquare
  }
  memo[row][col] = result.size
  return result
}

function findSquare(matrix, row, col) {
  if (matrix[row][col] === 0) return {pos: [row, col], size: 0}
  let width = 1
  let result = 1
  while (row + width < matrix.length && col + width < matrix[0].length) {
    if (verifyBorders(matrix, row, col, width)) {
      result = width + 1
    }
    width += 1
  }
  return {pos: [row, col], size: result}
}

function verifyBorders(matrix, row, col, width) {
  for (var i = 1; i <= width; i++) {
    const leftPt = matrix[row + i][col]
    const rightPt = matrix[row + i][col + width]
    const topPt = matrix[row][col + i]
    const bottomPt = matrix[row + width][col + i]
    if ((leftPt + rightPt + topPt + bottomPt) !== 4) return false
  }
  return true
}

console.log(maxBlackSquare(exMatrix, sizeMemo))
