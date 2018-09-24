const M = Number.MAX_VALUE

const adjacencyMatrix = [
  [M, M, M, M, M, M, M, M ],
  [M, 0, 2, M, M, M, M, 11 ],
  [M, 2, 0, 1, M, M, M, M ],
  [M, M, 1, 0, 2, 10, M, M ],
  [M, M, M, 2, 0, 3, M, M ],
  [M, M, M, 10, 3, 0, 8, M ],
  [M, M, M, M, M, 8, 0, 10 ],
  [M, 11, M, M, M, M, 10, 0 ],
]

const parentMatrix = [
  [0, 0, 0, 0, 0, 0, 0, 7 ],
  [0, 0, 2, 0, 0, 0, 0, 0 ],
  [0, 1, 0, 3, 0, 0, 0, 0 ],
  [0, 0, 2, 0, 4, 5, 0, 0 ],
  [0, 0, 0, 3, 0, 5, 0, 0 ],
  [0, 0, 0, 3, 4, 0, 6, 0 ],
  [0, 0, 0, 0, 0, 5, 0, 7 ],
  [0, 1, 0, 0, 0, 0, 6, 0 ],
]

function floydWarshall(matrix) {

  const nVertices = matrix.length - 1;

  for (var k = 1; k <= nVertices; k++) {

    for (var i = 1; i <= nVertices; i++ ) {
      for (var j = 1; j <= nVertices; j++) {
        if (matrix[i][k] + matrix[k][j] < matrix[i][j]) {
          matrix[i][j] = matrix[i][k] + matrix[k][j]
          parentMatrix[i][j] = k
        }
      }
    }

  }
}

function findRoute(matrix, begin, destination, result = []) {
  let throughPoint = matrix[destination][begin]
  if (throughPoint === begin) {
    result.push([begin, destination])
    return result
  }
  findRoute(matrix, begin, throughPoint, result)
  findRoute(matrix, throughPoint, destination, result)
  return result
}


floydWarshall(adjacencyMatrix)
console.log(adjacencyMatrix[1][6])
console.log(adjacencyMatrix[3][5])
console.log(adjacencyMatrix[1][5])
console.log(adjacencyMatrix[1][1])
console.log(parentMatrix)
console.log(findRoute(parentMatrix, 1, 6))
