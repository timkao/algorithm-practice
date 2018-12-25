const shortEx = [1, 5, 9]
const longEx = [7, 5, 9, 0, 2, 1, 3, 5, 7, 9, 1, 1, 5, 8, 8, 9, 7]

function shortestSuperSequence(short, long) {
  const shortPositions = createPositions(short, long)
  const shortPointers = createPointers(short)
  for (var i = 0; i < short.length; i++) {
    if (shortPositions[short[i]].length === 0) return null
  }
  return findSuperSequence(shortPositions, shortPointers)
}

function createPositions(short, long) {
  const resultTable = {}
  short.forEach(num => {
    if (resultTable[num] === undefined) {
      resultTable[num] = []
    }
  })
  long.forEach((num, idx) => {
    if (resultTable[num] !== undefined) {
      resultTable[num].push(idx)
    }
  })
  return resultTable
}

function createPointers(short) {
  const pointersTable = {}
  short.forEach(num => {
    if (pointersTable[num] === undefined) {
      pointersTable[num] = 0
    }
  })
  return pointersTable
}

function findSuperSequence(positionsTable, pointersTable) {
  let sequenceLength = Number.POSITIVE_INFINITY
  let result
  let moveNum = null
  while (shouldMove(positionsTable, pointersTable, moveNum)) {
    let maxIdx = Number.NEGATIVE_INFINITY
    let minIdx = Number.POSITIVE_INFINITY
    let minNum = null
    Object.keys(pointersTable).forEach(num => {
      const currPt = pointersTable[num]
      if (positionsTable[num][currPt] > maxIdx) {
        maxIdx = positionsTable[num][currPt]
      }
      if (positionsTable[num][currPt] < minIdx) {
        minIdx = positionsTable[num][currPt]
        minNum = num
      }
    })
    moveNum = minNum
    if (maxIdx - minIdx < sequenceLength) {
      sequenceLength = maxIdx - minIdx
      result = [minIdx, maxIdx]
    }
  }
  return result
}

function shouldMove(positionsTable, pointersTable, num) {
  if (num === null) return true
  pointersTable[num] += 1
  if (pointersTable[num] >= positionsTable[num].length) return false
  return true
}

console.log(shortestSuperSequence(shortEx, longEx))
