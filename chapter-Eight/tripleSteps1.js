
/*
  triple steps (recursion)
  to n - 1 and 1 stair for the last time
  to n - 2 and 2 stairs for the last time
  to n - 3 and 3 stairs for the last time
  The advantage of this approach is to prevent duplication since the last step is always different

  f(5) = f(4) + f(3) + f(2)
  f(4) = f(3) + f(2) + f(1)
  f(3) = f(2) + f(1) + f(0)
  f(2) = f(1) + f(0) + f(-1)
  f(1) = 1
  f(0) = 1
*/

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
