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

const discovered = []
const processed = []
const parent = []
const entryTime = []
const exitTime = []
let time = 0

function dfs(graph, currVertex = 1) {
  discovered[currVertex] = true
  time += 1
  entryTime[currVertex] = time
  parent[currVertex] = null
  processVertexEarly(currVertex)

  let childNode = graph.edges[currVertex]
  while (childNode !== null) {
    const childVertex = childNode.vex
    if (!processed[childVertex] || !graph.directed) {
      processeEdge(currVertex, childVertex)
    }
    if (!discovered[childVertex]) {
      discovered[childVertex] = true
      parent[childVertex] = currVertex
      dfs(graph, childVertex)
    }
    childNode = childNode.next
  }
  processVertexLate(currVertex)
  processed[currVertex] = true
  time += 1
  exitTime[currVertex] = time
}

function processeEdge(fromV, toV) {
  console.log(`from ${fromV} to ${toV}`)
}

function processVertexEarly(vertext) {
  console.log(`processing ${vertext} before its children`)
}

function processVertexLate(vertext) {
  console.log(`processing ${vertext} after its children`)
}

dfs(exampleGraph)
