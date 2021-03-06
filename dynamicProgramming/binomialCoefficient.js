// binomial coefficient with recursion
function bcRecursion(piecies, choices) {
  if (piecies === choices) return 1
  if (choices === 1 || (piecies - choices) === 1 ) return piecies
  if (choices === 0 || piecies === 0) return 1
  return bcRecursion(piecies - 1, choices) + bcRecursion(piecies - 1, choices - 1)
}

console.log(bcRecursion(8, 3))

// binomail coefficient with memoization
function bcMemoization(piecies, choices) {
  const table = []
  for (var i = 0; i <= piecies; i++) {
    table[i] = []
  }
  return calculate(piecies, choices, table)
}

function calculate(piecies, choices, table) {
  if (piecies === choices) return 1
  if (choices === 1 || (piecies - choices) === 1) return piecies
  if (choices === 0 || piecies === 0) return 1
  if (table[piecies][choices]) return table[piecies][choices]
  table[piecies][choices] = calculate(piecies - 1, choices, table) + calculate(piecies - 1, choices - 1, table)
  return table[piecies][choices]
}
console.log(bcMemoization(60, 29))

// binomial efficient with for loop
function bcForLoop(piecies, choices) {
  const table = []
  for (var i = 0; i <= piecies; i++) {
    table[i] = [1]
    table[i][i] = 1
  }
  for (var j = 1; j <= piecies; j++) {
    for (var k = 1; k <= choices; k++) {
      if (table[j][k] === undefined) {
        table[j][k] = table[j - 1][k] + table[j - 1][k - 1]
      }
    }
  }
  return table[piecies][choices]
}
console.log(bcForLoop(60, 29))
