// work but very slow....
function stringCompare(startStr, toStr, startLeng, toLeng) {
  if (startLeng === undefined) startLeng = startStr.length
  if (toLeng === undefined) toLeng = toStr.length

  if (startLeng === 0) return toLeng * indel()
  if (toLeng === 0) return startLeng * indel()

  const costs = []
  // match
  costs[0] = stringCompare(startStr, toStr, startLeng - 1, toLeng - 1) + match(startStr[startLeng - 1], toStr[toLeng - 1])

  // insert
  costs[1] = stringCompare(startStr, toStr, startLeng, toLeng - 1) + indel(toStr[toLeng - 1])

  // delete
  costs[2] = stringCompare(startStr, toStr, startLeng - 1, toLeng) + indel(startStr[startLeng - 1])

  return Math.min(...costs);
}

function match(c1, c2) {
  if (c1 === c2) return 0
  return 1
}

function indel(chr) {
  return 1
}

console.log(stringCompare('thou shal', 'you shou'));

// fast with dynamic programming TBC...

// ultimate with for loop
function stringCompareForLoop(startStr, toStr) {
  const costTable = []
  const parentTable = []
  const MAXLEN = startStr.length > toStr.length ? startStr.length : toStr.length
  initRow(MAXLEN, costTable, parentTable)
  initCol(MAXLEN, costTable, parentTable)
  const costs = []
  for (var i = 1; i <= startStr.length; i++) {
    for (var j = 1; j <= toStr.length; j++) {
      costs[0] = costTable[i - 1][j - 1] + match(startStr[i - 1], toStr[j - 1])
      costs[1] = costTable[i][j - 1] + indel(toStr[j - 1])
      costs[2] = costTable[i - 1][j] + indel(startStr[i - 1])
      costTable[i][j] = costs[0]
      parentTable[i][j] = 'm'
      for (var k = 1; k <= 2; k++) {
        if (costs[k] < costTable[i][j]) {
          costTable[i][j] = costs[k]
          parentTable[i][j] = k === 1 ? 'i' : 'd'
        }
      }
    }
  }
  return costTable[startStr.length][toStr.length]
}

function initRow(leng, cTable, pTable) {
  for (var i = 0; i <= leng; i++) {
    cTable[i] = [i]
    if (i > 0) {
      pTable[i] = ['d']
    } else {
      pTable[i] = ['e']
    }
  }
}

function initCol(leng, cTable, pTable) {
  for (var i = 0; i <= leng; i++) {
    cTable[0][i] = i
    if (i > 0) {
      pTable[0][i] = 'i'
    } else {
      pTable[0][i] = 'e'
    }
  }
}

console.log(stringCompareForLoop('thou shal', 'you shou'));
console.log(stringCompareForLoop('thou shalt not', 'you should not'));
