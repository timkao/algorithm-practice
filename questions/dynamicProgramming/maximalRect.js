/**
 * @param {character[][]} matrix
 * @return {number}
 */
var maximalRectangle = function(matrix) {
  console.log(matrix)
  if (matrix.length < 1) return 0
  const squareDp = []
  for (let row = 0; row < matrix.length; row++) {
      if (squareDp[row] === undefined) squareDp[row] = []
      for (let col = 0; col < matrix[0].length; col++) {
          const currCell = matrix[row][col]
          if (currCell === '0') {
              squareDp[row][col] = 0
          }
          if (currCell === '1') {
              if (row === 0 || col === 0) {
                  squareDp[row][col] = 1
              } else {
                  squareDp[row][col] = 1 + Math.min(squareDp[row - 1][col], squareDp[row][col - 1], squareDp[row - 1][col - 1])
              }
          }
      }
  }
  console.log(squareDp)
  let result = 0
  const areaDp = []
  for (let row2 = 0; row2 < squareDp.length; row2++) {
      if (areaDp[row2] === undefined) areaDp[row2] = []
      for (let col2 = 0; col2 < squareDp[0].length; col2++) {
          const currCell2 = squareDp[row2][col2]
          if (currCell2 === 0 || currCell2 === 1) {
              areaDp[row2][col2] = currCell2
          } else {
              const topNeighbor = squareDp[row2 - 1][col2]
              const leftNeighbor = squareDp[row2][col2 - 1]
              const daiNeighbor = squareDp[row2 - 1][col2 - 1]
              if (topNeighbor === leftNeighbor && leftNeighbor === daiNeighbor) {
                  areaDp[row2][col2] = currCell2 * currCell2
                  result = Math.max(areaDp[row2][col2], result)
              } else {
                  const leftArea = areaDp[row2][col2 - 1]
                  const topArea = areaDp[row2 - 1][col2]
                  areaDp[row2][col2] = Math.max(leftArea, topArea) + currCell2
              }
          }
          result = Math.max(areaDp[row2][col2], result)
      }
  }
  console.log(areaDp)
  for (let i = 0; i < matrix.length; i++) {
      let horizontalSingle = 0
      for (let j = 0; j < matrix[0].length; j++) {
          if (matrix[i][j] === '1') {
              horizontalSingle += 1
              result = Math.max(horizontalSingle, result)
          } else {
              horizontalSingle = 0
          }
      }
  }
  for (let k = 0; k < matrix[0].length; k++) {
      let verticalSingle = 0
      for (let m = 0; m < matrix.length; m++) {
          if (matrix[m][k] === '1') {
              verticalSingle += 1
              result = Math.max(verticalSingle, result)
          } else {
              verticalSingle = 0
          }
      }
  }

  return result
};

console.log(maximalRectangle([["1","1","1","1","1","1","1","1"],["1","1","1","1","1","1","1","0"],["1","1","1","1","1","1","1","0"],["1","1","1","1","1","0","0","0"],["0","1","1","1","1","0","0","0"]]))
