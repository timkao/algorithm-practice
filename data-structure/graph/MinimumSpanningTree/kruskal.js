function Graph() {
  this.edges = []; // edges of each node (list of linkedlist)
  this.outDegree = []; // outdegree of each vertex
  this.nVertices = 0; // number of vertices
  this.nEdges = 0; // number of edges
  this.directed = false // directed or undirected
}

function edge(xVertex, yVertex, weight) {
  this.xVertex = xVertex
  this.yVertex = yVertex
  this.weight = weight
}

function Vertex(idx) {
  this.idx = idx
}

const a1 = new edge(1, 2, 5)
const a2 = new edge(1, 3, 7)
const a3 = new edge(1, 4, 12)
const a4 = new edge(2, 5, 7)
const a5 = new edge(2, 3, 9)
const a6 = new edge(3, 4, 4)
const a7 = new edge(3, 5, 4)
const a8 = new edge(3, 6, 3)
const a9 = new edge(4, 6, 7)
const a10 = new edge(5, 6, 2)
const a11 = new edge(5, 7, 5)
const a12 = new edge(6, 7, 2)


const kruskalGraph = new Graph()
kruskalGraph.nVertices = 7;
kruskalGraph.nEdges = 12;

const edgeArray = [a1, a2, a3, a4, a5, a6, a7, a8, a9, a10, a11, a12]

function SetUnion() {
  this.parent = []
  this.size = []
}

function union(xVertex, yVertex, setUnion) {
  const xRoot = findRoot(xVertex, setUnion)
  const yRoot = findRoot(yVertex, setUnion)
  if (setUnion.size[xRoot] >= setUnion.size[yRoot]) {
    setUnion.parent[yRoot] = xRoot
    setUnion.size[xRoot] += setUnion.size[yRoot]
  } else {
    setUnion.parent[xRoot] = yRoot
    setUnion.size[yRoot] += setUnion.size[xRoot]
  }
}

function findRoot(vertex, setUnion) {
  if (setUnion.parent[vertex] === vertex) {
    return vertex
  }
  return findRoot(setUnion.parent[vertex], setUnion)
}


function sameComponent(xVertex, yVertex, setUnion) {
  return findRoot(xVertex, setUnion) === findRoot(yVertex, setUnion)
}


function kruskal(graph) {

  const result = []

  // initialize a set union
  const setUnion = new SetUnion()
  for (var i = 1; i <= graph.nVertices; i++ ) {
    setUnion.parent[i] = i
    setUnion.size[i] = 1
  }

  // sort the edges by weight
  edgeArray.sort((a, b) => {
    return a.weight - b.weight
  })

  edgeArray.forEach(singleEdge => {
    if (!sameComponent(singleEdge.xVertex, singleEdge.yVertex, setUnion)) {
      union(singleEdge.xVertex, singleEdge.yVertex, setUnion)
      result.push(singleEdge)
    }
  })

  return result
}

console.log(kruskal(kruskalGraph))
