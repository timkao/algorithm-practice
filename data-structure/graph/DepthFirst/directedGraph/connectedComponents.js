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

exampleGraph.nVertices = 8

const one_2 = new Edgenode(2)
exampleGraph.edges[1] = one_2

const two_3 = new Edgenode(3)
const two_4 = new Edgenode(4)
two_3.next = two_4
exampleGraph.edges[2] = two_3

const three_1 = new Edgenode(1)
exampleGraph.edges[3] = three_1

const four_1 = new Edgenode(1)
const four_8 = new Edgenode(8)
four_1.next = four_8
exampleGraph.edges[4] = four_1

const five_6 = new Edgenode(6)
exampleGraph.edges[5] = five_6

const six_7 = new Edgenode(7)
exampleGraph.edges[6] = six_7

const seven_5 = new Edgenode(5)
exampleGraph.edges[7] = seven_5

const eight_6 = new Edgenode(6)
exampleGraph.edges[8] = eight_6

function paritionComponent(graph) {
  const processed = []
  const discovered = []
  const parent = []
  let time = 0
  const entryTime = []
  const exitTime = []
  let finished = false

  let componentsFound = 0
  const low = []
  const scc = [] // strongly connected component
  const stack = []
  for (let i = 1; i < graph.nVertices; i++) {
    if (!discovered[i]) {
      dfs(graph, i)
    }
  }
  return scc

  function dfs(targetGraph, currVertex) {
    if (finished) return
    discovered[currVertex] = true
    time += 1
    entryTime[currVertex] = time
    processVertexEarly(currVertex)

    let childNode = targetGraph.edges[currVertex]
    while (childNode !== null) {
      const childVertex = childNode.vex
      if (!processed[childVertex] || !targetGraph.directed) {
        processeEdge(currVertex, childVertex)
      }
      if (!discovered[childVertex]) {
        parent[childVertex] = currVertex
        discovered[childVertex] = true
        dfs(targetGraph, childVertex)
      }
      if (finished) return
      childNode = childNode.next
    }
    processVertexLate(currVertex)
    processed[currVertex] = true
    time += 1
    exitTime[currVertex] = time
  }

  function processeEdge(fromV, toV) {
    console.log(`from ${fromV} to ${toV}`)
    console.log(classifyEdge(fromV, toV))
    const edgeType = classifyEdge(fromV, toV)
    if (edgeType === 'BACK') {
      if (entryTime[toV] < entryTime[low[fromV]]) {
        low[fromV] = toV
      }
    }
    if (edgeType === 'CROSS') {
      if (scc[toV] === undefined) {
        if (entryTime[toV] < entryTime[low[fromV]]) {
          low[fromV] = toV
        }
      }
    }
  }

  function processVertexEarly(vertex) {
    console.log(`processing ${vertex} before its children`)
    low[vertex] = vertex
    stack.push(vertex)
  }

  function processVertexLate(vertex) {
    console.log(`processing ${vertex} after its children`)
    if (low[vertex] === vertex) {
      componentsFound += 1
      scc[vertex] = componentsFound

      let otherVertex = stack.pop()
      while (otherVertex !== vertex) {
        scc[otherVertex] = componentsFound
        otherVertex = stack.pop()
      }
    }
    if (entryTime[low[vertex]] < entryTime[low[parent[vertex]]]) {
      low[parent[vertex]] = low[vertex]
    }
  }

  function classifyEdge(fromV, toV) {
    if (!discovered[toV]) return 'TREE'
    if (!processed[toV]) return 'BACK'
    if (entryTime[toV] > entryTime[fromV]) return 'FORWARD'
    if (entryTime[toV] < entryTime[fromV]) return 'CROSS'
  }

}

console.log(paritionComponent(exampleGraph))
