/**
 * @param {number[][]} costs
 * @return {number}
 */
var minCost = function(costs, row = 0, colorIdx = 3, memo = []) {
  if (row === costs.length) return 0
  if (memo[row] === undefined) {
      memo[row] = []
  }
  if (memo[row][colorIdx] !== undefined) return memo[row][colorIdx]
  const currHouse = costs[row]
  let totalCost = Number.POSITIVE_INFINITY
  for (var i = 0; i < currHouse.length; i++) {
      if (i !== colorIdx){
          const currCost = currHouse[i] + minCost(costs, row + 1, i, memo)
          if (currCost < totalCost) {
              totalCost = currCost
          }
      }

  }
  memo[row][colorIdx] = totalCost
  return memo[row][colorIdx]
};
