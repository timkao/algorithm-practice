const maxSubsequence = require('../chapter-Sixteen/maxSubsequence')

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

function maxSubMatrixOpt(matrix) {
  let result = {
    start: [null, null],
    end: [null, null],
    sum: Number.NEGATIVE_INFINITY
  }
  for (var rowStart = 0; rowStart < matrix.length; rowStart++) {
    const partialSum = [] // this save a N
    for (var rowEnd = rowStart; rowEnd < matrix.length; rowEnd++) {
      const currMax = findMax(matrix, rowStart, rowEnd, partialSum)
      if (currMax.sum > result.sum) {
        result = currMax
      }
    }
  }
  return result
}

function findMax(matrix, rowStart, rowEnd, partial) {
  for (var i = 0; i < matrix[0].length; i++) {
    if (partial[i] === undefined) {
      partial[i] = matrix[rowEnd][i]
    } else {
      partial[i] += matrix[rowEnd][i]
    }
  }
  const colSubSequence = maxSubsequence(partial) // this save N ^ 2
  return {
    start: [rowStart, colSubSequence.pos[0]],
    end: [rowEnd, colSubSequence.pos[1]],
    sum: colSubSequence.maxSum
  }
}

console.log(maxSubMatrixOpt(ex1))
console.log(maxSubMatrixOpt(ex2))
