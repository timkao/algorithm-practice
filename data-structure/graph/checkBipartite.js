const { Graph, EdgeNode } = require('./basicStructure');

const exampleGraph = new Graph()
exampleGraph.nVertices = 12

const one_2 = new EdgeNode(2)
const one_6 = new EdgeNode(6)
const one_3 = new EdgeNode(3) // break the "bipartite"
one_2.next = one_6
one_6.next = one_3 // break the "bipartite"
exampleGraph.edges[1] = one_2

const two_1 = new EdgeNode(1)
const two_5 = new EdgeNode(5)
two_1.next = two_5
exampleGraph.edges[2] = two_1

const three_4 = new EdgeNode(4)
const three_8 = new EdgeNode(8)
const three_1 = new EdgeNode(1) // break the "bipartite"
three_4.next = three_8
three_8.next = three_1 // break the "bipartite"
exampleGraph.edges[3] = three_4

const four_3 = new EdgeNode(3)
exampleGraph.edges[4] = four_3

const five_2 = new EdgeNode(2)
const five_8 = new EdgeNode(8)
five_2.next = five_8
exampleGraph.edges[5] = five_2

const six_1 = new EdgeNode(1)
const six_7 = new EdgeNode(7)
six_1.next = six_7
exampleGraph.edges[6] = six_1

const seven_6 = new EdgeNode(6)
const seven_10 = new EdgeNode(10)
seven_6.next = seven_10
exampleGraph.edges[7] = seven_6

const eight_3 = new EdgeNode(3)
const eight_5 = new EdgeNode(5)
eight_3.next = eight_5
exampleGraph.edges[8] = eight_3

const nine_10 = new EdgeNode(10)
const nine_12 = new EdgeNode(12)
nine_10.next = nine_12
exampleGraph.edges[9] = nine_10

const ten_7 = new EdgeNode(7)
const ten_9 = new EdgeNode(9)
const ten_11 = new EdgeNode(11)
ten_7.next = ten_9
ten_9.next = ten_11
exampleGraph.edges[10] = ten_7

const ele_10 = new EdgeNode(10)
const ele_12 = new EdgeNode(12)
ele_10.next = ele_12
exampleGraph.edges[11] = ele_10

const twe_9 = new EdgeNode(9)
const twe_11 = new EdgeNode(11)
twe_9.next = twe_11
exampleGraph.edges[12] = twe_9

function checkBipartite(graph) {
  const edges = graph.edges
  const leftSet = []
  const rightSet = []
  const processed = []
  const queue = []
  queue.push(1)
  leftSet[1] = true
  while ( queue.length > 0) {
    const fromIdx = queue.shift()
    let currNode = edges[fromIdx]
    while (currNode !== null && currNode !== undefined) {
      const toIdx  = currNode.idx
      if (!processed[toIdx]) {
        if (isSameSubSet(fromIdx, toIdx, leftSet, rightSet)) {
          return false
        } else {
          putInSet(fromIdx, toIdx, leftSet, rightSet)
        }
        queue.push(toIdx)
      }
      currNode = currNode.next
    }
    processed[fromIdx] = true
  }
  return true
}

function isSameSubSet(from, to, left, right) {
  return (left[from] && left[to]) || (right[from] && right[to])
}

function putInSet(from, to, left, right) {
  if (left[from]) {
    right[to] = true
  } else {
    left[to] = true
  }
}

console.log(checkBipartite(exampleGraph))
