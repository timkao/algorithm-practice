var numSquares = function(n) {
  const allSquareChoices = findSquares(n)
  return findMinCombination(n, allSquareChoices)
};

function findMinCombination(target, candidates, memo = {}) {
  if (target === 0) return 0
  if (target < 0) return Number.POSITIVE_INFINITY
  if (memo[target] !== undefined) return memo[target]
  let result = Number.POSITIVE_INFINITY
  for (var i = 0; i < candidates.length; i++) {
      const currNum = candidates[i]
      const tempResult = 1 + findMinCombination(target - currNum, candidates, memo)
      if (result > tempResult) result = tempResult
  }
  memo[target] = result
  return memo[target]
}

function findSquares(n) {
  const result = []
  let start = 1
  while (start * start <= n) {
      result.push(start * start)
      start += 1
  }
  return result
}


var numSquaresRfc = function(n, memo = []) {
  if (n === 0) return []
  if (memo[n] !== undefined) return memo[n]
  let base = 1
  let result = null
  while (base * base <= n) {
      const curNum = base * base
      const temp = [curNum].concat(numSquares(n - curNum, memo))
      if (result === null) {
        result = temp
      } else {
        if (result.length > temp.length) {
          result = temp
        }
      }
      base += 1
  }
  memo[n] = result
  return result
};
