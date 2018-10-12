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
