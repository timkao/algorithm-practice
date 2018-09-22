function graph() {
  this.edges = []; // edges of each node (list of linkedlist)
  this.outDegree = []; // outdegree of each vertex
  this.nVertices = 0; // number of vertices
  this.nEdges = 0; // number of edges
  this.directed = false // directed or undirected
}

function edgeNode(idx, weight) {
  this.idx = idx
  this.weight = weight
  this.next = null
}

const primGraph = new graph()
primGraph.nVertices = 7

const edgeNode1_2 = new edgeNode(2, 5)
const edgeNode1_3 = new edgeNode(3, 7)
const edgeNode1_4 = new edgeNode(4, 12)
edgeNode1_2.next = edgeNode1_3
edgeNode1_3.next = edgeNode1_4
primGraph.edges[1] = edgeNode1_2
primGraph.outDegree[1] = 3

const edgeNode2_1 = new edgeNode(1, 5)
const edgeNode2_3 = new edgeNode(3, 9)
const edgeNode2_5 = new edgeNode(5, 7)
edgeNode2_1.next = edgeNode2_3
edgeNode2_3.next = edgeNode2_5
primGraph.edges[2] = edgeNode2_1
primGraph.outDegree[2] = 3

const edgeNode3_1 = new edgeNode(1, 7)
const edgeNode3_2 = new edgeNode(2, 9)
const edgeNode3_4 = new edgeNode(4, 4)
const edgeNode3_5 = new edgeNode(5, 4)
const edgeNode3_6 = new edgeNode(6, 3)
edgeNode3_1.next = edgeNode3_2
edgeNode3_2.next = edgeNode3_4
edgeNode3_4.next = edgeNode3_5
edgeNode3_5.next = edgeNode3_6
primGraph.edges[3] = edgeNode3_1
primGraph.outDegree[3] = 5

const edgeNode4_1 = new edgeNode(1, 12)
const edgeNode4_3 = new edgeNode(3, 4)
const edgeNode4_6 = new edgeNode(6, 7)
edgeNode4_1.next = edgeNode4_3
edgeNode4_3.next = edgeNode4_6
primGraph.edges[4] = edgeNode4_1
primGraph.outDegree[4] = 3

const edgeNode5_2 = new edgeNode(2, 7)
const edgeNode5_3 = new edgeNode(3, 4)
const edgeNode5_6 = new edgeNode(6, 2)
const edgeNode5_7 = new edgeNode(7, 5)
edgeNode5_2.next = edgeNode5_3
edgeNode5_3.next = edgeNode5_6
edgeNode5_6.next = edgeNode5_7
primGraph.edges[5] = edgeNode5_2
primGraph.outDegree[5] = 4

const edgeNode6_3 = new edgeNode(3, 3)
const edgeNode6_4 = new edgeNode(4, 7)
const edgeNode6_5 = new edgeNode(5, 2)
const edgeNode6_7 = new edgeNode(7, 2)
edgeNode6_3.next = edgeNode6_4
edgeNode6_4.next = edgeNode6_5
edgeNode6_5.next = edgeNode6_7
primGraph.edges[6] = edgeNode6_3
primGraph.outDegree[6] = 4

const edgeNode7_5 = new edgeNode(5, 5)
const edgeNode7_6 = new edgeNode(6, 2)
edgeNode7_5.next = edgeNode7_6
primGraph.edges[7] = edgeNode7_5
primGraph.outDegree[7] = 2

function prims(graph, start) {
  const inTree = []
  const parent = []
  const distance = []

  let currVertex = start

  while (inTree[currVertex] !== true) {
    inTree[currVertex] = true
    let currEdgeNode = graph.edges[currVertex]
    while (currEdgeNode !== null) {
      const oldWeight = distance[currEdgeNode.idx]

      if (oldWeight === undefined && inTree[currEdgeNode.idx] === undefined) {
        distance[currEdgeNode.idx] = currEdgeNode.weight
        parent[currEdgeNode.idx] = currVertex
      } else {
        if (oldWeight > currEdgeNode.weight && inTree[currEdgeNode.idx] === undefined ) {
          distance[currEdgeNode.idx] = currEdgeNode.weight
          parent[currEdgeNode.idx] = currVertex
        }
      }
      currEdgeNode = currEdgeNode.next
    }

    currVertex = goToClosestVertex(primGraph, inTree, distance, currVertex)
  }

  return parent
}

function goToClosestVertex(graph, inTree, distance, currIdx) {
  let smallestDist;
  let result = currIdx;
  for (var i = 0; i < graph.nVertices; i++) {
    if (distance[i] !== undefined && inTree[i] !== true) { // 該點已經相鄰且尚未被納入結果中
      if (smallestDist === undefined || smallestDist > distance[i]) {
        smallestDist = distance[i]
        result = i
      }
    }
  }
  return result;
}


console.log(prims(primGraph, 1))
