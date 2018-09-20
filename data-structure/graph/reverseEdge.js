const { Vertex } = require('./findShortestPath');
const template = require('./dftTemplate')

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
four.neighbors.push(six)
four.neighbors.push(eight)
five.neighbors.push(six)
six.neighbors.push(seven)
seven.neighbors.push(five)
eight.neighbors.push(six)

const processed = []
const discovered = []
const entryTime = []
const exitTime = []
const parent = []
const copied = []
let time = 0

function processVertexEarly(vertex) {
  console.log('-------- start processing --------')
  console.log(`This is ${vertex.value}`);
  if (copied[vertex.value] === undefined) {
    console.log(`${vertex.value} is copied`)
    copied[vertex.value] = new Vertex(vertex.value)
  }
  console.log('-------- start processing --------\n')
}

function processEdge(vertex, neighbor) {
  console.log('----- Do whatever we want to vertex and the neighbor ------')
  console.log(`The vertex is ${vertex.value}`)
  console.log(`The neighbor is ${neighbor.value}`)

  if (copied[neighbor.value] === undefined) {
    copied[neighbor.value] = new Vertex(neighbor.value)
  }
  copied[neighbor.value].neighbors.push(copied[vertex.value]);

  console.log('----- Do whatever we want to vertex and the neighbor ------\n')
}

function processVertexLate(vertex) {
  console.log('----- Post Processed ------')
  console.log(`${vertex.value} is processed`)
  console.log('----- Post Processed ------\n')
}


// 越先發現，越晚做完
function dfs(graph) {

  processVertexEarly(graph)
  time += 1 // take a record before recursion
  entryTime[graph.value] = time;
  discovered[graph.value] = true // marked as discovered

  // process children (neighbors)
  let neighborsIdx = 0;
  while (neighborsIdx < graph.neighbors.length) {
    const currNeighbor = graph.neighbors[neighborsIdx];

    if (!discovered[currNeighbor.value]) {
      currNeighbor.parent = graph
      parent[currNeighbor.value] = graph.value
      processEdge(graph, currNeighbor)
      dfs(currNeighbor)
    } else if (!processed[currNeighbor.value]) {
      processEdge(graph, currNeighbor)
    }
    neighborsIdx += 1
  }

  processVertexLate(graph)
  time += 1 // 目前感覺是可有可無，是否是因為 javaScript 的關係？
  exitTime[graph.value] = time
  processed[graph.vlaue] = true // marked as processed

}

function reverseEdges(graph) {
  dfs(graph)
  return copied[graph.value]
}

const newGraph = reverseEdges(one)
template.dftTemplate(newGraph)
