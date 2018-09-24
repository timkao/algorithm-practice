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




