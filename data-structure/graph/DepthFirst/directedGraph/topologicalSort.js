function Graph(directed) {
  this.edges = {}
  this.degrees = {}
  this.nVertices = 0
  this.nEdges = 0
  this.directed = directed
}

function EdgeNode(vertex, weight = 0) {
  this.vex = vertex
  this.weight = weight
  this.next = null
}

const exampleGraph = new Graph(true)

const A_B = new EdgeNode('B')
const A_C = new EdgeNode('C')
A_B.next = A_C
exampleGraph.edges.A = A_B

const B_D = new EdgeNode('D')
const B_C = new EdgeNode('C')
B_C.next = B_D
exampleGraph.edges.B = B_C

const C_E = new EdgeNode('E')
const C_F = new EdgeNode('F')
C_E.next = C_F
exampleGraph.edges.C = C_E

exampleGraph.edges.D = null

const E_D = new EdgeNode('D')
exampleGraph.edges.E = E_D

const F_E = new EdgeNode('E')
exampleGraph.edges.F = F_E

const G_A = new EdgeNode('A')
const G_F = new EdgeNode('F')
G_A.next = G_F
exampleGraph.edges.G = G_A

function topologicalSort(graph) {
  const discovered = {}
  const processed = {}
  const parent = {}
  let time = 0
  const entryTime = {}
  const exitTime = {}
  let finished = false

  const vertices = Object.keys(graph.edges)
  const stack = []
  for (let i = 0; i < vertices.length; i++) {
    const vertex = vertices[i]
    if (!discovered[vertex]) {
      dfs(graph, vertex)
    }
  }
  return stack.reverse()

  function dfs(targetGraph, currVetex) {
    if (finished) return
    discovered[currVetex] = true
    processVertexEarly(currVetex)
    time += 1
    entryTime[currVetex] = time

    let childNode = targetGraph.edges[currVetex]
    while (childNode !== null) {
      const childVertex = childNode.vex
      if (!processed[childVertex] || !targetGraph.directed) {
        processeEdge(currVetex, childVertex)
      }
      if (!discovered[childVertex]) {
        discovered[childVertex] = true
        parent[childVertex] = currVetex
        dfs(targetGraph, childVertex)
      }
      if (finished) return
      childNode = childNode.next
    }
    processVertexLate(currVetex)
    processed[currVetex] = true
    time += 1
    exitTime[currVetex] = true
  }

  function processeEdge(fromV, toV) {
    console.log(`from ${fromV} to ${toV}`)
  }

  function processVertexEarly(vertex) {
    console.log(`processing ${vertex} before its children`)
  }

  function processVertexLate(vertex) {
    console.log(`processing ${vertex} after its children`)
    stack.push(vertex)
  }
}

console.log(topologicalSort(exampleGraph))
