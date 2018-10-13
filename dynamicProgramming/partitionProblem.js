const example = [1, 2, 3, 4, 5, 6, 7, 8, 9]

function byDynamicProgramming(arr, partitions) {

  // initialize (partial) result table with bases cases
  const table = []
  const cutPointTable = []
  const sums = []
  sums[0] = 0;
  for (var j = 1; j <= arr.length; j++) {
    sums[j] = arr.slice(0, j).reduce((aggr, num)=> {
      return aggr + num
    }, 0)
    table[j] = [0, sums[j]]
    cutPointTable[j] = [0, 0]
  }
  for (var i = 0; i < partitions; i++) {
    table[1][i + 1] = arr[0]
    cutPointTable[1][i + 1] = 0
  }
  console.log(table)

  // build (partial) result table
  for (var n = 2; n <= arr.length; n++) {
    for (var k = 2; k <= partitions; k++) {
      table[n][k] = Number.MAX_VALUE
      for (var cutPoint = 1; cutPoint <= n - 1; cutPoint++) {
        const beforeCutPoint = table[cutPoint][k - 1]
        const afterCutPoint = sums[n] - sums[cutPoint]
        const tempResult = Math.max(beforeCutPoint, afterCutPoint)
        if (tempResult < table[n][k]) {
          table[n][k] = tempResult
          cutPointTable[n][k] = cutPoint
        }
      }
    }
  }
  console.log(table)
  console.log(cutPointTable)
}


byDynamicProgramming(example, 3)


function byRecursion(arr, partition) {
  if (partition === 1) return sumArr(arr)
  if (arr.length === 1) return arr[0]
  let resultValue = Number.MAX_VALUE;
  for (var i = 1; i < arr.length; i++) {
    const currValue = Math.max(byRecursion(arr.slice(0, i), partition - 1), sumArr(arr.slice(i)))
    if (currValue < resultValue) {
      resultValue = currValue
    }
  }
  return resultValue;
}

function sumArr(arr) {
  return arr.reduce((aggr, num) => aggr + num, 0)
}

console.log(byRecursion(example, 3))

function byRecursionWithCache(arr, partition, costTable = [], parentTable = []) {
  for (var i = 1; i <= arr.length; i++) {
    costTable[i] = []
    parentTable[i] = []
  }
  return recursionCacheCreator(arr, partition, costTable, parentTable)
}

function recursionCacheCreator(arr, partition, costTable, parentTable) {
  if (partition === 1) {
    costTable[arr.length][partition] = sumArr(arr)
    return costTable[arr.length][partition]
  }
  if (arr.length === 1) {
    costTable[arr.length][partition] = arr[0]
    return costTable[arr.length][partition]
  }
  let resultValue = Number.MAX_VALUE;
  for (var i = 1; i < arr.length; i++) {
    if (costTable[i][partition - 1] === undefined) {
      costTable[i][partition - 1] = recursionCacheCreator(arr.slice(0, i), partition - 1, costTable, parentTable)
    }
    const currValue = Math.max(costTable[i][partition - 1], sumArr(arr.slice(i)))
    if (currValue < resultValue) {
      resultValue = currValue
      costTable[arr.length][partition] = resultValue;
      parentTable[arr.length][partition] = i
    }
  }
  return costTable[arr.length][partition];
}

console.log(byRecursionWithCache(example, 3))
