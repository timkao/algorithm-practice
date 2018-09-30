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

const enode1_2 = new Edgenode(2)
const enode1_3 = new Edgenode(3)
const enode1_4 = new Edgenode(4)
const enode1_5 = new Edgenode(5)
enode1_2.next = enode1_3
enode1_3.next = enode1_4
enode1_4.next = enode1_5
exGraph.edges[1] = enode1_2

const enode2_1 = new Edgenode(1)
const enode2_6 = new Edgenode(6)
enode2_1.next = enode2_6
exGraph.edges[2] = enode2_1

const enode3_1 = new Edgenode(1)
const enode3_4 = new Edgenode(4)
const enode3_6 = new Edgenode(6)
enode3_1.next = enode3_4
enode3_4.next = enode3_6
exGraph.edges[3] = enode3_1

const enode4_1 = new Edgenode(1)
const enode4_3 = new Edgenode(3)
const enode4_6 = new Edgenode(6)
enode4_1.next = enode4_3
enode4_3.next = enode4_6
exGraph.edges[4] = enode4_1

const enode5_1 = new Edgenode(1)
const enode5_6 = new Edgenode(6)
enode5_1.next = enode5_6
exGraph.edges[5] = enode5_1

const enode6_2 = new Edgenode(2)
const enode6_3 = new Edgenode(3)
const enode6_4 = new Edgenode(4)
const enode6_5 = new Edgenode(5)
enode6_2.next = enode6_3
enode6_3.next = enode6_4
enode6_4.next = enode6_5
exGraph.edges[6] = enode6_2

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
  for (var i = 0; i <= graph.nVerteces; i++) { // 最初值是每一條路都不能走
    candidates[i] = false
  }
  while (currEdgenode !== null) { // 所有當下可走的路
    candidates[currEdgenode.idx] = true
    currEdgenode = currEdgenode.next
  }
  route.forEach(ele => { // 去除已經走過的路
    candidates[ele] = false;
  })
  candidates.forEach((bool, idx) => { // 只找可走的路的路名
    if (bool) {
      result.push(idx)
    }
  })
  return result
}

function allPaths(graph, source, destination, result = [], route = [], vertex) {
  if (vertex === undefined) {
    vertex = source
    route.push(vertex)
  }

  if (isSolution(destination, vertex)) {
    processSolution(result, route)
    return
  } else {
    const candidates = constructCandidates(graph, route, vertex)
    for (var i = 0; i < candidates.length; i++) {
      const newRoute = route.concat([candidates[i]])
      makeMove()
      allPaths(graph, source, destination, result, newRoute, candidates[i])
      unMakeMove()
    }
  }
  return result
}

console.log(allPaths(exGraph, 6, 3))
