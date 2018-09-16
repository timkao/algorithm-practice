const { Vertex } = require('./findShortestPath');

const one = new Vertex(1)
const two = new Vertex(2)
const three = new Vertex(3)
const four = new Vertex(4)
const five = new Vertex(5)
const six = new Vertex(6)

one.neighbors.push(two)
one.neighbors.push(five)
one.neighbors.push(six)
two.neighbors.push(one)
two.neighbors.push(three)
two.neighbors.push(five)
three.neighbors.push(two)
three.neighbors.push(four)
four.neighbors.push(three)
four.neighbors.push(five)
five.neighbors.push(one)
five.neighbors.push(two)
five.neighbors.push(four)
six.neighbors.push(one)

/* assume all vertex has unique integer value */

function processVertexEarly(vertex) {
  console.log('-------- start processing --------')
  console.log(`This is ${vertex.value}`);
  console.log('-------- start processing --------\n')
}

function processEdge(vertex, neighbor) {
  console.log('----- Do whatever we want to vertex and the neighbor ------')
  console.log(`The vertex is ${vertex.value}`)
  console.log(`The neighbor is ${neighbor.value}`)
  console.log('----- Do whatever we want to vertex and the neighbor ------\n')
}

function processVertexLate(vertex) {
  console.log('----- Post Processed ------')
  console.log(`${vertex.value} is processed`)
  console.log('----- Post Processed ------\n')
}

const processed = []
const discovered = []
const entryTime = []
const exitTime = []
let time = 0

// 越先發現，越晚做完

function dftTemplate(graph) {
  discovered[graph.value] = true
  time += 1
  processVertexEarly(graph)
  entryTime[graph.value] = time;
  if (graph.neighbors.length <= 1) {
    return
  }

  let neighborsIdx = 0;
  while (neighborsIdx < graph.neighbors.length) {
    const currNeighbor = graph.neighbors[neighborsIdx];

    if (!discovered[currNeighbor.value]) {
      currNeighbor.parent = graph
      processEdge(graph, currNeighbor)
      dftTemplate(currNeighbor)
    } else if (!processed[currNeighbor.value]) {
      processEdge(graph, currNeighbor)
    }
    neighborsIdx += 1
  }
  processVertexLate(graph)
  time += 1
  exitTime[graph.value] = time
  processed[graph.vlaue] = true
}

dftTemplate(one);
