/**
 * @param {number[][]} grid
 * @return {number}
 */
var countCornerRectangles = function(grid) {
  const dp = []
  const colLen = grid[0].length
  for (let i = 0; i < colLen; i++) {
      dp[i] = []
      for (let j = 0; j < colLen; j++) {
          dp[i][j] = 0
      }
  }
  let result = 0
  for (let row = 0; row < grid.length; row++) {
      for (let left = 0; left < colLen; left++) {
          for (let right = left + 1; right < colLen; right++) {
              if (grid[row][left] === 1 && grid[row][right] === 1) {
                  result += dp[left][right]
                  dp[left][right] += 1
              }
          }
      }
  }
  return result
};
