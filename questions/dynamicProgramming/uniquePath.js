var uniquePaths = function(m, n, row = 0, col = 0, memo = []) {
  if (row >= m || col >= n) return 0
  if (memo[row] === undefined) memo[row] = []
  if (memo[row][col] !== undefined) return memo[row][col]
  if (row === m - 1 && col === n - 1) return 1
  const right = uniquePaths(m, n, row, col + 1, memo)
  const down = uniquePaths(m, n, row + 1, col, memo)
  memo[row][col] = right + down
  return memo[row][col]
};


var uniquePathsReverse = function(m, n) {
  return generatePath(m, n, m - 1, n - 1)
};

function generatePath(m, n, row, col, memo = []) {
  if (row < 0 || col < 0) return 0
  if (row === 0 && col === 0) return 1
  if (memo[row] === undefined) memo[row] = []
  if (memo[row][col] !== undefined) return memo[row][col]
  const left = generatePath(m, n, row, col - 1, memo)
  const up = generatePath(m, n, row - 1, col, memo)
  memo[row][col] = left + up
  return memo[row][col]
}

var uniquePathsDP = function(m, n) {
  let solArr = []
  for (var i = 0; i < m; i++) {
      solArr[i] = 1
  }
  let nextArr = [1]
  for (var row = 1; row < n; row++) {
      for (var col = 1; col < solArr.length; col++) {
          nextArr[col] = nextArr[col - 1] + solArr[col]
      }
      solArr = nextArr
      nextArr = [1]
  }
  return solArr[solArr.length - 1]
};
