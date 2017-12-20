function countWays(n) {
  if (n < 0) {
    return 0;
  } else if (n === 0) {
    return 1
  } else {
    return countWays(n - 1) + countWays(n - 2) + countWays(n - 3)
  }
}

console.log(countWays(10))

function countWays2(n, memo) {

  if (memo === undefined) { memo = [1]}

  if (n < 0) {
    return 0
  } else if (n === 0) {
    return 1
  }

  if (memo[n] !== undefined) { return memo[n]}
  else {
    memo[n] = countWays2(n - 1, memo) + countWays2(n - 2, memo) + countWays2(n - 3, memo);
  }

  return memo[n]
}

console.log(countWays2(10))
