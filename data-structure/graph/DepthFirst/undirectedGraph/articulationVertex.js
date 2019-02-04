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
const one_6 = new Edgenode(6)
one_2.next = one_6
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

const five_2 = new Edgenode(2)
const five_4 = new Edgenode(4)
five_2.next = five_4
exampleGraph.edges[5] = five_2

const six_1 = new Edgenode(1)
exampleGraph.edges[6] = six_1

/* implementation */

function findArticulationVertex(graph, start = 1) {
  const processed = []
  const discovered = []
  const parent = []
  let time = 0
  const entryTime = []
  const exitTime = []
  let finished = false

  const result = []
  const reachableAncestor = []
  const vertexOutDegree = []
  dfs(graph, start)
  return result

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
        if (vertexOutDegree[currVertex] === undefined) {
          vertexOutDegree[currVertex] = 1
        } else {
          vertexOutDegree[currVertex] += 1
        }
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
    if (parent[fromV] !== toV && !processed[toV] && discovered[toV]) {
      console.log(`from ${fromV} to ${toV} is a back edge, update ancestor`)
      if (entryTime[toV] < entryTime[fromV]) {
        reachableAncestor[fromV] = toV
      }
    } else {
      console.log(`from ${fromV} to ${toV}`)
    }
  }

  function processVertexEarly(vertex) {
    console.log(`processing ${vertex} before its children`)
    reachableAncestor[vertex] = vertex
  }

  /* eslint-disable */
  function processVertexLate(vertex) {
    console.log(`processing ${vertex} after its children`)
    if (vertexOutDegree[vertex] === undefined) {
      console.log(`${vertex} is a leaf`)
    } else if(parent[vertex] === undefined && vertexOutDegree[vertex] > 1) {
      console.log(`${vertex} is root and has more than 1 child, hence it is an articulation point`)
      result.push(vertex)
    } else if (reachableAncestor[vertex] === vertex && parent[vertex] !== undefined) {
      console.log(`${vertex} is an articulation point`)
      result.push(vertex)
    } else if (reachableAncestor[vertex] === parent[vertex] && parent[parent[vertex] !== undefined]) {
      console.log(`${vertex} is an articulation point`)
      result.push(vertex)
    }
    if (entryTime[reachableAncestor[vertex]] < entryTime[reachableAncestor[parent[vertex]]]) {
      reachableAncestor[parent[vertex]] = reachableAncestor[vertex]
    }
  }
  /* eslint-disable */
}

console.log(findArticulationVertex(exampleGraph))
