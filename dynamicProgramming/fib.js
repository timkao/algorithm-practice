// basic fib with recursion
function fibRecursion(num) {
  if (num === 0) {
    return 0
  }
  if (num === 1) {
    return 1
  }
  return  fibRecursion(num - 1) + fibRecursion(num - 2)
}
console.log(fibRecursion(10))

// enhanced fib with memoization
function fibMemoization(num, results = []) {
  if (num === 0) return 0
  if (num === 1) return 1
  if (results[num]) return results[num]
  results[num] = fibMemoization(num - 1, results) + fibMemoization(num - 2, results)
  return results[num]
}
console.log(fibMemoization(100))

// enhanced again by removing recursion
function fibForLoop(num) {
  const results = [0, 1];
  for (var i = 2; i <= num; i++) {
    results[i] = results[i - 1] + results[i - 2]
  }
  return results[num]
}
console.log(fibForLoop(100))

// ultimate enhancement by removing results array
function fibUltimate(num) {
  let previousOne = 1
  let prePreviousOne = 0
  let result;
  for (var i = 2; i <= num; i++) {
    result = previousOne + prePreviousOne
    prePreviousOne = previousOne;
    previousOne = result;
  }
  return result
}
console.log(fibUltimate(100));
