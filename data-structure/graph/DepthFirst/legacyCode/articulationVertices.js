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
five.neighbors.push(two)
five.neighbors.push(four)
six.neighbors.push(one)

const processed = []
const discovered = []
const parent = []
const entryTime = []
const exitTime = []
const reachableAncestor = []
const treeOutDegree = [0, 0, 0, 0, 0, 0, 0, 0]
let time = 0

/* assume all vertex has unique integer value */

function processVertexEarly(vertex) {
  console.log('-------- start processing --------')
  console.log(`The vertex is ${vertex.value}`)
  reachableAncestor[vertex.value] = vertex.value
  console.log(`The reachable ancesor for ${vertex.value} now is ${reachableAncestor[vertex.value]}`)
  console.log('-------- start processing --------\n')
}

function processEdge(fromVt, toVt) {
  console.log('----- Do whatever we want to vertex and the neighbor ------')
  const from = fromVt.value
  const to = toVt.value
  console.log(`The from vertex is ${from}`)
  console.log(`The to vertex is ${to}`)
  const edgeType = discovered[to] === true ? 'BACK' : 'TREE'

  if (edgeType === 'TREE') {
    console.log(`${from} to ${to} is tree edge`)
    treeOutDegree[from] += 1
  }
  if (edgeType === 'BACK' && parent[from] !== to) {
    console.log(`${from} to ${to} is back edge`)
    if (entryTime[to] < entryTime[ reachableAncestor[from] ]) {
      reachableAncestor[from] = to;
    }
  }

  console.log('----- Do whatever we want to vertex and the neighbor ------\n')
}

function processVertexLate(vertex) {
  console.log('----- Post Processed ------')
  console.log(`${vertex.value} is processed`)

  /* check "Root Cut-Node" */
  if (parent[vertex.value] === undefined && treeOutDegree[vertex.value] > 1) {
    console.log(`${vertex.value} is an articulation vertex for it is a Root Cut Node`)
  }

  /* check Bridge Cut-Node */
  if (reachableAncestor[vertex.value] === vertex.value && treeOutDegree[vertex.value] > 0) {
    console.log(`${vertex.value} is an articulation vertex for it is a Bridge Cut Node`)
    console.log(`${parent[vertex.value]} is an articulation vetex for it is a parent of a Bridge Cut Node ${vertex.value}`)
  }

  /* check Parent Cut-Node */
  if (reachableAncestor[vertex.value] === parent[vertex.value] && parent[parent[vertex.value]] !== undefined) {
    console.log(`${parent[vertex.value]} is an articulation vetex for it is a Parent Cut Node`)
  }

  /* update ReachableAncestor */
  const timeVertex = entryTime[reachableAncestor[vertex.value]]
  const timeParent = entryTime[reachableAncestor[parent[vertex.value]]]
  if (timeVertex < timeParent) {
    reachableAncestor[parent[vertex.value]] = reachableAncestor[vertex.value]
  }

  console.log('----- Post Processed ------\n')
}

// 越先發現，越晚做完
function articulationVertices(graph) {

  processVertexEarly(graph)
  time += 1 // take a record before recursion
  entryTime[graph.value] = time;
  discovered[graph.value] = true // marked as discovered

  // process children (neighbors)
  let neighborsIdx = 0;
  while (neighborsIdx < graph.neighbors.length) {
    const currNeighbor = graph.neighbors[neighborsIdx];

    if (!discovered[currNeighbor.value]) {
      parent[currNeighbor.value] = graph.value
      processEdge(graph, currNeighbor)
      articulationVertices(currNeighbor)
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

articulationVertices(one)
console.log(treeOutDegree)
