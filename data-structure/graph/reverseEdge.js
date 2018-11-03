const { Graph, EdgeNode } = require('./basicStructure');

const exampleGraph = new Graph()
const one_2 = new EdgeNode(2)
exampleGraph.edges[1] = one_2

const two_3 = new EdgeNode(3)
const two_4 = new EdgeNode(4)
const two_5 = new EdgeNode(5)
two_3.next = two_4
two_4.next = two_5
exampleGraph.edges[2] = two_3

const three_1 = new EdgeNode(1)
exampleGraph.edges[3] = three_1

const four_1 = new EdgeNode(1)
const four_6 = new EdgeNode(6)
const four_8 = new EdgeNode(8)
four_1.next = four_6
four_6.next = four_8
exampleGraph.edges[4] = four_1

const five_6 = new EdgeNode(6)
exampleGraph.edges[5] = five_6

const six_7 = new EdgeNode(7)
exampleGraph.edges[6] = six_7

const seven_5 = new EdgeNode(5)
exampleGraph.edges[7] = seven_5

const eight_6 = new EdgeNode(6)
exampleGraph.edges[8] = eight_6

function reverseIt(arr) {
  const result = []
  for (var i = 0; i < arr.length; i++) {
    let currNode = arr[i]
    while (currNode !== undefined && currNode !== null) {
      if (result[currNode.idx] === undefined) {
        result[currNode.idx] = new EdgeNode(i)
      } else {
        addToEnd(result[currNode.idx], i)
      }
      currNode = currNode.next
    }
  }
  return result
}

function addToEnd(list, idx) {
  while (list.next !== null) {
    list = list.next
  }
  list.next = new EdgeNode(idx)
}

console.log(reverseIt(exampleGraph.edges))
