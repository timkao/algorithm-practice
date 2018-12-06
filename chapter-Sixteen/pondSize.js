const example = [
  [0, 2, 1, 0],
  [0, 1, 0, 1],
  [1, 1, 0, 1],
  [0, 1, 0, 1],
];


function pondSizes(land) {
  const result = []
  const visitedOBlock = []
  const pondNumbers = {}
  for (var row = 0; row < land.length; row++) {
    for (var col = 0; col < land[0].length; col++) {
      if (result[row] === undefined) {
        result[row] = []
        visitedOBlock[row] = []
      }
      result[row][col] = false
      visitedOBlock[row][col] = false
    }
  }

  let pondCode = 0
  for (var i = 0; i < land.length; i++) {
    for (var j = 0; j < land[0].length; j++) {
      if (land[i][j] === 0 && visitedOBlock[i][j] === false) {
        pondCode += 1
        findSizes(land, visitedOBlock, [i, j], result, pondCode, pondNumbers)
      }
    }
  }
  return pondNumbers
}

function findSizes(land, visitedOBlock, currPosition, result, code, pondNumbers) {
  visitedOBlock[currPosition[0]][currPosition[1]] = true
  result[currPosition[0]][currPosition[1]] = code
  if (pondNumbers[code] === undefined) {
    pondNumbers[code] = 1
  } else {
    pondNumbers[code] += 1
  }

  const neighbors = generateNeighbors(currPosition, land)

  for (var i = 0; i < neighbors.length; i++) {
    const currNeighbor = neighbors[i]
    const row = currNeighbor[0]
    const col = currNeighbor[1]

    if (visitedOBlock[row][col]) {
      continue
    }
    if (land[row][col] !== 0) {
      visitedOBlock[row][col] = true
    } else {
      findSizes(land, visitedOBlock, [row, col], result, code, pondNumbers)
    }
  }

}

function generateNeighbors(arr, land) {
  const row = arr[0]
  const col = arr[1]
  const allPositions = [
    [row - 1, col],
    [row + 1, col],
    [row, col - 1],
    [row, col + 1],
    [row - 1, col - 1],
    [row - 1, col + 1],
    [row + 1, col - 1],
    [row + 1, col + 1],
  ]
  return allPositions.filter(pos => {
    return pos[0] >= 0 && pos[0] <= land.length - 1 && pos[1] >= 0 && pos[1] <= land[0].length - 1
  })
}

console.log(pondSizes(example))
