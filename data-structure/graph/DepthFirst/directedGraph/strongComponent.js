/*
  find strong components in a non strongly connected component
*/
const { Vertex } = require('../../BreadFirst/findShortestPath')

const one = new Vertex(1)
const two = new Vertex(2)
const three = new Vertex(3)
const four = new Vertex(4)
const five = new Vertex(5)
const six = new Vertex(6)
const seven = new Vertex(7)
const eight = new Vertex(8)

one.neighbors.push(two)
two.neighbors.push(three)
two.neighbors.push(four)
two.neighbors.push(five)
three.neighbors.push(one)
four.neighbors.push(one)
four.neighbors.push(eight)
four.neighbors.push(six)
five.neighbors.push(six)
six.neighbors.push(seven)
seven.neighbors.push(five)
eight.neighbors.push(six)

/* basic records for dfs */
/* 如果是 list 代表是針對每個點的紀錄 */
const processed = []
const discovered = []
const entryTime = []
const exitTime = []
const parent = []
let time = 0

/* extra variables for the algorithm */
let numOfcomponents = 0
const belongsToComponent = []
const oldestVertex = [] // in the same connected component
const stack = []

function processVertexEarly(vertex) {
  console.log('-------- start processing --------')
  console.log(`This is ${vertex.value}`);
  oldestVertex[vertex.value] = vertex.value
  stack.push(vertex.value)
  console.log('-------- start processing --------\n')
}

function processEdge(fromVertex, toVertex) {
  console.log('----- Do whatever we want to vertex and the neighbor ------')
  console.log(`The vertex is ${fromVertex.value}`)
  console.log(`The neighbor is ${toVertex.value}`)

  const fromIdx = fromVertex.value
  const toIdx = toVertex.value
  const edgeType = edgeClassification(fromVertex, toVertex)
  console.log(edgeType)
  if (edgeType === 'BACK') {
    if (entryTime[toIdx] < entryTime[oldestVertex[fromIdx]]) {
      console.log('swap')
      console.log(oldestVertex[fromIdx])
      console.log(toIdx)
      oldestVertex[fromIdx] = toIdx
    }
  }

  if (edgeType === 'CROSS') {
    if (belongsToComponent[toIdx] === undefined) {
      if (entryTime[toIdx] < entryTime[oldestVertex[fromIdx]]) {
        oldestVertex[fromIdx] = toIdx
      }
    }
  }

  console.log('----- Do whatever we want to vertex and the neighbor ------\n')
}

function processVertexLate(vertex) {
  console.log('----- Post Processed ------')
  console.log(`${vertex.value} is processed`)

  if (oldestVertex[vertex.value] === vertex.value) {
    console.log('xxxxxxxxxxxxxx')
    popComponent(vertex)
  }

  if (entryTime[oldestVertex[vertex.value]] < entryTime[oldestVertex[parent[vertex.value]]]) {
    oldestVertex[parent[vertex.value]] = oldestVertex[vertex.value]
  }

  console.log('----- Post Processed ------\n')
}

function edgeClassification(fromVertex, toVertex) {
  const fromIdx = fromVertex.value
  const toIdx = toVertex.value

  /* tree edge */
  if (parent[toIdx] === fromIdx) {
    return 'TREE'
  }
  /* forward edge */
  if (processed[toIdx] && entryTime[fromIdx] < entryTime[toIdx]) {
    return 'FORWARD'
  }
  /* back edge */
  if (discovered[toIdx] && !processed[toIdx]) {
    return 'BACK'
  }
  /* cross edge */
  if (processed[toIdx] && entryTime[toIdx] < entryTime[fromIdx] ) {
    return 'CROSS'
  }
}

function popComponent(vertex) {
  numOfcomponents += 1;
  belongsToComponent[vertex.value] = numOfcomponents
  let stackTop = stack.pop()
  while (vertex.value !== stackTop) {
    belongsToComponent[stackTop] = numOfcomponents
    stackTop = stack.pop()
  }
}

function strongComponent(graph) {

  processVertexEarly(graph)
  time += 1 // take a record before recursion
  entryTime[graph.value] = time;
  discovered[graph.value] = true // marked as discovered

  // process children (neighbors)
  let neighborsIdx = 0;
  while (neighborsIdx < graph.neighbors.length) {
    const currNeighbor = graph.neighbors[neighborsIdx];

    if (!discovered[currNeighbor.value]) {
      parent[currNeighbor.value] = graph.value /* 對 parent 的分辨在 processEdge 之前 */
      processEdge(graph, currNeighbor)
      strongComponent(currNeighbor)
    } else if (!processed[currNeighbor.value]) {
      processEdge(graph, currNeighbor)
    }
    neighborsIdx += 1
  }

  processVertexLate(graph)
  time += 1
  exitTime[graph.value] = time
  processed[graph.vlaue] = true // marked as processed

}


strongComponent(one)
console.log(entryTime)
console.log(oldestVertex)
console.log(belongsToComponent)
console.log(numOfcomponents)
