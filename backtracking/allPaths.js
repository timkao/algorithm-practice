function Graph() {
  this.nVerteces = 0
  this.edges = []
  this.directed = false
}

function Edgenode(idx) {
  this.idx = idx;
  this.next = null
}

const exGraph = new Graph()
exGraph.nVerteces = 6




function isSolution(destination, vertex) {
  return destination === vertex
}

function processSolution(result, route) {
  result.push(route)
}

function makeMove() {

}

function unMakeMove() {

}

function constructCandidates(graph, route, vertex) {
  let currEdgenode = graph.edges[vertex]
  const result = []
  const candidates = []
  for (var i = 0; i <= graph.nVerteces; i++) {
    candidates[i] = false
  }
  while (currEdgenode !== null) {
    candidates[currEdgenode.idx] = true
    currEdgenode = currEdgenode.next
  }
  route.forEach(ele => {
    candidates[ele] = false;
  })
  candidates.forEach((bool, idx) => {
    if (bool) {
      result.push(idx)
    }
  })
  return result
}


function allPaths(graph, source, destination, result = [], route = [], vertex) {
  route.push(vertex)
  if (isSolution(destination, vertex)) {
    processSolution(result, route)
    return
  } else {
    const candidates = constructCandidates(graph, source, destination, route, vertex)
    for (var i = 0; i < candidates.length; i++) {
      const newRoute = route.concat([candidates[i]])
      makeMove()
      allPaths(graph, source, destination, result, newRoute, candidates[i])
      unMakeMove()
    }
  }
  return result
}
