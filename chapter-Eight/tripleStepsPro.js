function steps(numOfStairs) {
  if (numOfStairs === 0) return 0
  if (numOfStairs === 1) return 1
  if (numOfStairs === 2) return 2
  if (numOfStairs === 3) return 4
  return steps(numOfStairs - 1) + steps(numOfStairs - 2) + steps(numOfStairs - 3)
}

console.log(steps(30))

function stepsWithMemo(numOfStairs, memo = []) {
  if (numOfStairs === 0) return 0
  if (numOfStairs === 1) return 1
  if (numOfStairs === 2) return 2
  if (numOfStairs === 3) return 4
  if (memo[numOfStairs] !== undefined) return memo[numOfStairs]
  memo[numOfStairs] = stepsWithMemo(numOfStairs - 1, memo) + stepsWithMemo(numOfStairs - 2, memo) + stepsWithMemo(numOfStairs - 3, memo)
  return memo[numOfStairs]
}

console.log(stepsWithMemo(40))

function stepsDynamicProgramming(numOfStairs) {
  const resultArr = [0, 1, 2, 4]
  for (var i = 4; i <= numOfStairs; i++) {
    resultArr[i] = resultArr[i - 1] + resultArr[i - 2] + resultArr[i - 3]
  }
  return resultArr[numOfStairs]
}

console.log(stepsDynamicProgramming(40))
