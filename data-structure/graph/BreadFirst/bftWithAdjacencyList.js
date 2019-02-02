function Graph() {
  this.edges = []
  this.degrees = []
  this.nVertices = 0
  this.nEdges = 0
  this.directed = false
}

function Edgenode(vex, weight = 0) {
  this.vex = vex
  this.weight = weight
  this.next = null
}

const exampleGraph = new Graph()

exampleGraph.nVertices = 6

const one_2 = new Edgenode(2)
const one_5 = new Edgenode(5)
const one_6 = new Edgenode(6)
one_2.next = one_5
one_5.next = one_6
exampleGraph.edges[1] = one_2

const two_1 = new Edgenode(1)
const two_3 = new Edgenode(3)
const two_5 = new Edgenode(5)
two_1.next = two_3
two_3.next = two_5
exampleGraph.edges[2] = two_1

const three_2 = new Edgenode(2)
const three_4 = new Edgenode(4)
three_2.next = three_4
exampleGraph.edges[3] = three_2

const four_3 = new Edgenode(3)
const four_5 = new Edgenode(5)
four_3.next = four_5
exampleGraph.edges[4] = four_3

const five_1 = new Edgenode(1)
const five_2 = new Edgenode(2)
const five_4 = new Edgenode(4)
five_1.next = five_2
five_2.next = five_4
exampleGraph.edges[5] = five_1

const six_1 = new Edgenode(1)
exampleGraph.edges[6] = six_1

/* implementation */

function bfs(graph, start = 1) { // 1 is the name of the vertex. could be anything
  const processed = []  // could be array or object. here we use array since the name of vertex is a number
  const discovered = [] // could be array or object. here we use array since the name of vertex is a number
  const parent = [] // could be array or object. here we use array since the name of vertex is a number

  parent[start] = null
  discovered[start] = true

  const queue = []
  queue.push(start) // it is the "vertex" that needs to be processed not "edgeNode"

  while (queue.length > 0) {
    const currVertex = queue.shift()
    processVertexEarly(currVertex)
    processed[currVertex] = true // after processVertexEarly

    let childNode = graph.edges[currVertex] // it is a linked list in this case
    while (childNode !== null) {
      const childVertex = childNode.vex

      // if it is "undirectd", we should have two chances to process the "edge" (not vertex!)
      if (!processed[childVertex] || !graph.directed) {
        processEdge(graph, currVertex, childVertex)
      }
      // if the child is not seen before, we should plan to process it in the future
      if (!discovered[childVertex]) {
        queue.push(childVertex)
        parent[childVertex] = currVertex
        discovered[childVertex] = true
      }
      childNode = childNode.next
    }
    processVertexLate(currVertex)
  }
}

function processVertexEarly(vertex) {
  console.log(`start processing vertex ${vertex}`)
}

function processEdge(graph, fromV, toV) {
  console.log(`from ${fromV} to ${toV}`)
}

function processVertexLate(vertex) {
  console.log(`finished processing ${vertex}`)
}

bfs(exampleGraph, 3)
