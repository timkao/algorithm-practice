const ex1 = [
  [3, 10, 12, -8, 22, 1],
  [12, 31, -22, 9, 15, 6],
  [-21, -17, 21, 4, 10, 8],
  [2, 19, -23, 7, -5, -8],
  [15, 6, -9, -14, 20, -9],
  [-32, 25, 3, 13, -26, -11],
]

const ex2 = [
  [9, -8, 1, 3, -2],
  [-3, 7, 6, -2, 4],
  [6, -4, -4, 8, -7],
]

function maxSubMatrix(matrix) {
  let result = {
    start: [null, null],
    end: [null, null],
    sum: Number.NEGATIVE_INFINITY,
  }
  for (var i = 0; i < matrix.length; i++) {
    for (var j = 0; j < matrix[0].length; j++) {
      const temp = findMax(matrix, i, j)
      if (result.sum < temp.sum) {
        result = temp
      }
    }
  }
  return result
}

function findMax(matrix, row = 0, col = 0) {
  const newMatrix = matrix.map(arr => {
    return arr.slice()    // cannot do return arr since the pointer will point to the original one!!
  })
  for (var k = row; k < newMatrix.length; k++) {
    for (var m = col; m < newMatrix[0].length; m++) {
      if (m !== col) {
        newMatrix[k][m] = newMatrix[k][m] + newMatrix[k][m - 1]
      }
    }
  }
  for (var i = row; i < newMatrix.length; i++) {
    if ( i === row ) continue
    for (var j = col; j < newMatrix[0].length; j++) {
      newMatrix[i][j] = newMatrix[i][j] + newMatrix[i - 1][j]
    }
  }
  return matrixMax(newMatrix, row, col)
}

function matrixMax(matrix, row, col) {
  let result = Number.NEGATIVE_INFINITY
  let end
  for (var i = row; i < matrix.length; i++) {
    for (var j = col; j < matrix[0].length; j++) {
      const currNum = matrix[i][j]
      if (currNum > result) {
        result = currNum
        end = [i, j]
      }
    }
  }
  return {
    start: [row, col],
    end: end,
    sum: result
  }
}
console.log(maxSubMatrix(ex1))
console.log(maxSubMatrix(ex2))
