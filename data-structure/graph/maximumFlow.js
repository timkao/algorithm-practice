function Graph() {
  this.nVertices = 0
  this.edges = []
  this.nEdges = 0
  this.directed = false
}

/* the initial residual is the same as the capacity (weight) */
function Edgenode(idx, weight) {
  this.idx = idx
  this.capacity = weight
  this.flow = 0
  this.residual = weight
  this.next = null
}

const exGraph = new Graph()

const edgeNode1_2 = new Edgenode(2, 3)
const edgeNode1_3 = new Edgenode(3, 4)
edgeNode1_2.next = edgeNode1_3
exGraph.edges[1] = edgeNode1_2

const edgeNode2_1 = new Edgenode(1, 0)
const edgeNode2_4 = new Edgenode(4, 3)
const edgeNode2_5 = new Edgenode(5, 1)
edgeNode2_1.next = edgeNode2_4
edgeNode2_4.next = edgeNode2_5
exGraph.edges[2] = edgeNode2_1

const edgeNode3_1 = new Edgenode(1, 0)
const edgeNode3_4 = new Edgenode(4, 1)
const edgeNode3_5 = new Edgenode(5, 2)
edgeNode3_1.next = edgeNode3_4
edgeNode3_4.next = edgeNode3_5
exGraph.edges[3] = edgeNode3_1

const edgeNode4_2 = new Edgenode(2, 0)
const edgeNode4_3 = new Edgenode(3, 0)
const edgeNode4_6 = new Edgenode(6, 3)
edgeNode4_2.next = edgeNode4_3
edgeNode4_3.next = edgeNode4_6
exGraph.edges[4] = edgeNode4_2

const edgeNode5_2 = new Edgenode(2, 0)
const edgeNode5_3 = new Edgenode(3, 0)
const edgeNode5_6 = new Edgenode(6, 5)
edgeNode5_2.next = edgeNode5_3
edgeNode5_3.next = edgeNode5_6
exGraph.edges[5] = edgeNode5_2

const edgeNode6_4 = new Edgenode(4, 0)
const edgeNode6_5 = new Edgenode(5, 0)
edgeNode6_4.next = edgeNode6_5
exGraph.edges[6] = edgeNode6_4

let parent = []
let discovered = []
let processed = []

function processVertexEarly(vertex) {
  //console.log(`start processing ${vertex}`)
}

function processEdge(fromV, toV) {
  //console.log(`from ${fromV} to ${toV}`)
}

function processVertexLate(vertex) {
  //console.log(`finished processing ${vertex}`)
}

function bfsMaximumFlow(graph, start) {
  const queue = []
  discovered[start] = true
  queue.push(start)
  while (queue.length > 0) {
    const currVert = queue.shift()
    processVertexEarly(currVert)
    processed[currVert] = true
    let currEdgenode = graph.edges[currVert];
    while (currEdgenode !== null) {
      const node = currEdgenode.idx
      if (!discovered[node] && currEdgenode.residual !== 0) {
        discovered[node] = true
        parent[node] = currVert
        queue.push(node)
      }
      processEdge(currVert, node)
      currEdgenode = currEdgenode.next
    }
    processVertexLate(currVert)
  }
}

function initializeBfs() {
  parent = []
  discovered = []
  processed = []
}

function findMaximumFlow(graph, source, sink) {
  let volume;
  bfsMaximumFlow(graph, source) // created a route
  volume = findPathMinResidual(graph, source, sink)
  while (volume > 0) {
    updateResidualGraph(graph, source, sink, volume)
    initializeBfs() // since the graph is updated, the parent, discovered and processed will change. Therefore, initialize them
    bfsMaximumFlow(graph, source) // created a route after the graph is updated
    volume = findPathMinResidual(graph, source, sink)
  }
}

function findPathMinResidual(graph, source, end) {
  const currParent = parent[end]
  if (currParent === undefined) {
    return 0
  }
  const tempEdgenode = findEdge(graph, currParent, end)

  if (currParent === source) {
    return tempEdgenode.residual
  }
  return Math.min(tempEdgenode.residual, findPathMinResidual(graph, source, currParent))
}

function updateResidualGraph(graph, source, end, volume) {
  // find and update edge i j
  const tempEdgenode = findEdge(graph, parent[end], end)
  tempEdgenode.residual -= volume
  tempEdgenode.flow += volume
  // find and update edge j i
  const tempEdgenode2 = findEdge(graph, end, parent[end])
  tempEdgenode2.residual += volume
  if (parent[end] === source) {
    return
  }
  updateResidualGraph(graph, source, parent[end], volume)
}

function findEdge(graph, start, end) {
  let tempEdgenode = graph.edges[start]
  while (tempEdgenode !== null && tempEdgenode.idx !== end) {
    tempEdgenode = tempEdgenode.next
  }
  return tempEdgenode
}

findMaximumFlow(exGraph, 1, 6)
