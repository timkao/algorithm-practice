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
