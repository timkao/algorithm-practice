function Graph() {
  const edges = []
  const degrees = []
  let nVertices = 0
  let nEdges = 0
  const directed = false
}

function Edgenode(idx, wei = 0) {
  const neighborIdx = idx
  let weight = wei
  let next = null
}

const exampleGraph = new Graph()

exampleGraph.nVertices = 6

const one_2 = new Edgenode(2)
const one_5 = new Edgenode(5)
const one_6 = new Edgenode(6)
one_2.next = one_5
one_5.next = one_6
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

const five_1 = new Edgenode(1)
const five_2 = new Edgenode(2)
const five_4 = new Edgenode(4)
five_1.next = five_2
five_2.next = five_4
exampleGraph.edges[5] = five_1

const six_1 = new Edgenode(1)
exampleGraph.edges[6] = six_1


