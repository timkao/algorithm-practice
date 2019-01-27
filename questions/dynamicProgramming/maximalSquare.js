/**
 * @param {character[][]} matrix
 * @return {number}
 */
var maximalSquare = function(matrix) {
  if (matrix.length === 0) return 0
  let dp = []
  let result = 0
  for (let i = 0; i < matrix[0].length; i++) {
      dp.push(matrix[0][i])
      if (matrix[0][i] === '1' && result === 0) result = 1
  }
  if (result === 0) {
      for (let j = 1; j < matrix.length; j++) {
          if (matrix[j][0] === '1') result = 1
      }
  }
  for (let row = 1; row < matrix.length; row++) {
      const nextDP = [matrix[row][0]]
      for (let i = 1; i < dp.length; i++) {
          if (matrix[row][i] === '1') {
              nextDP[i] = Math.min(nextDP[i - 1], dp[i], dp[i - 1]) + 1
          } else {
              nextDP[i] = 0
          }
          if (nextDP[i] > result) {
              result = nextDP[i]
          }
      }
      dp = nextDP
  }
  return result * result
};
