/**
 * @param {number} n
 * @return {number}
 */
var numTrees = function(n, start = 1, memo = []) {
  if (n === 1) return 1
  if (start === n) return 0
  if (memo[n] === undefined) {
      memo[n] = []
  }
  if (memo[n][start] !== undefined) return memo[n][start]
  let result = 0
  for (var i = start; i <= n; i++) {
      const leftTrees = numTrees(i - 1, start, memo)
      const rightTrees = numTrees(n, i + 1, memo)
      if (leftTrees === 0 && rightTrees === 0) {
          result += 1
      }
      if (leftTrees === 0 && rightTrees !== 0) {
          result += rightTrees
      }
      if (leftTrees !== 0 && rightTrees === 0) {
          result += leftTrees
      }
       if (leftTrees !== 0 && rightTrees !== 0) {
          result += leftTrees * rightTrees
      }
  }
  memo[n][start] = result
  return memo[n][start]
};
