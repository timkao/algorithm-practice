const assert = require('assert')

var minCostClimbingStairs = function(cost, pointer = -1) {
  if (pointer === cost.length - 1) return 0
  if (pointer === cost.length - 2) return 0
  const oneStep = cost[pointer + 1] + minCostClimbingStairs(cost, pointer + 1)
  const twoStep = cost[pointer + 2] + minCostClimbingStairs(cost, pointer + 2)
  return Math.min(oneStep, twoStep)
};

var minCostClimbingStairsOpt = function(cost, pointer = -1, memo = {}) {
  if (pointer === cost.length - 1) return 0
  if (pointer === cost.length - 2) return 0
  if (memo[pointer] !== undefined) return memo[pointer]
  const oneStep = cost[pointer + 1] + minCostClimbingStairs(cost, pointer + 1, memo)
  const twoStep = cost[pointer + 2] + minCostClimbingStairs(cost, pointer + 2, memo)
  memo[pointer] = Math.min(oneStep, twoStep)
  return memo[pointer]
};

const test1  = minCostClimbingStairs([1, 100, 1, 1, 1, 100, 1, 1, 100, 1])
const test2 = minCostClimbingStairs([0, 0, 0, 1])
const test3 = minCostClimbingStairs([1, 0, 0, 1])

assert.equal(test1, 6)
assert.equal(test2, 0)
assert.equal(test3, 0)

