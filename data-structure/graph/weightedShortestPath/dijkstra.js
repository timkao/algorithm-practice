function Graph() {
  this.nVertices = 0
  this.edges = []
  this.nEdges = 0
  this.directed = false
  this.outDegree = []
}

function Edgenode(idx, weight) {
  this.idx = idx
  this.weight = weight
  this.next = null
}

const exGraph = new Graph()
exGraph.nVertices = 7
exGraph.nEdges = 8

const edgeNode1_2 = new Edgenode(2, 2)
const edgeNode1_7 = new Edgenode(7, 11)
edgeNode1_2.next = edgeNode1_7
exGraph.edges[1] = edgeNode1_2

const edgeNode2_1 = new Edgenode(1, 2)
const edgeNode2_3 = new Edgenode(3, 1)
edgeNode2_1.next = edgeNode2_3
exGraph.edges[2] = edgeNode2_1

const edgeNode3_2 = new Edgenode(2, 1)
const edgeNode3_4 = new Edgenode(4, 2)
const edgeNode3_5 = new Edgenode(5, 10)
edgeNode3_2.next = edgeNode3_4
edgeNode3_4.next = edgeNode3_5
exGraph.edges[3] = edgeNode3_2

const edgeNode4_3 = new Edgenode(3, 2)
const edgeNode4_5 = new Edgenode(5, 3)
edgeNode4_3.next = edgeNode4_5
exGraph.edges[4] = edgeNode4_3

const edgeNode5_3 = new Edgenode(3, 10)
const edgeNode5_4 = new Edgenode(4, 3)
const edgeNode5_6 = new Edgenode(6, 8)
edgeNode5_3.next = edgeNode5_4
edgeNode5_4.next = edgeNode5_6
exGraph.edges[5] = edgeNode5_3

const edgeNode6_5 = new Edgenode(5, 8)
const edgeNode6_7 = new Edgenode(7, 10)
edgeNode6_5.next = edgeNode6_7
exGraph.edges[6] = edgeNode6_5

const edgeNode7_1 = new Edgenode(1, 11)
const edgeNode7_6 = new Edgenode(6, 10)
edgeNode7_1.next = edgeNode7_6
exGraph.edges[7] = edgeNode7_1

function dijkstra(graph, start) {
  const distance = []
  const parent = []
  const evaluated = []
  let currV = start
  distance[currV] = 0 // 若不這麻做則 71 行的計算無法進行

  while (evaluated[currV] !== true) {
    evaluated[currV] = true
    let currEdgeNode = graph.edges[currV]

    while ( currEdgeNode !== null) {
      if (distance[currEdgeNode.idx] === undefined) {
        distance[currEdgeNode.idx] = distance[currV] + currEdgeNode.weight // 要算上前面的路徑
        parent[currEdgeNode.idx] = currV
      } else {
        if (!evaluated[currEdgeNode.idx] && distance[currEdgeNode.idx] > distance[currV] + currEdgeNode.weight) {
          distance[currEdgeNode.idx] = distance[currV] + currEdgeNode.weight
          parent[currEdgeNode.idx] = currV
        }
      }
      currEdgeNode = currEdgeNode.next;
    }

    let closestDist;
    for (var i = 1; i <= graph.nVertices; i++) {
      if (distance[i] !== undefined && !evaluated[i]) {
        if (closestDist === undefined || distance[i] < closestDist) {
          closestDist = distance[i]
          currV = i
        }
      }
    }

  }
  return distance
}

console.log(dijkstra(exGraph, 1))
