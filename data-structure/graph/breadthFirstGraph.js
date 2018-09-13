function Vertex (val) {
  this.value = val
  this.neighbors = [];
}

const one = new Vertex(1)
const two = new Vertex(2)
const three = new Vertex(3)
const four = new Vertex(4)
const five = new Vertex(5)
const six = new Vertex(6)
const seven = new Vertex(7)
const eight = new Vertex(8)

one.neighbors.push(two)
one.neighbors.push(three)
one.neighbors.push(seven)
one.neighbors.push(eight)

two.neighbors.push(eight)
two.neighbors.push(one)
two.neighbors.push(five)
two.neighbors.push(four)

three.neighbors.push(seven)
three.neighbors.push(one)
three.neighbors.push(six)

four.neighbors.push(two)
four.neighbors.push(five)
four.neighbors.push(six)

five.neighbors.push(two)
five.neighbors.push(four)
five.neighbors.push(six)

six.neighbors.push(five)
six.neighbors.push(three)
six.neighbors.push(four)

seven.neighbors.push(one)
seven.neighbors.push(three)

eight.neighbors.push(one)
eight.neighbors.push(two)

function shortestPath(fromNode, toNode, visited = []) {
  let count = 0;
  if (fromNode.value === toNode.value) {
    return count
  }
  visited.push(fromNode.value);
  count++
  let queue = [];
  queue = queue.concat(fromNode.neighbors);

  let nextNeighbors = []

  while (queue.length > 0) {
    const currNode = queue.shift()
    if (currNode.value === toNode.value) {
      return count;
    }
    visited.push(currNode.value);

    currNode.neighbors.forEach(node => {
      if (!visited.includes(node.value)) {
        nextNeighbors.push(node)
      }
    })

    if (queue.length === 0) {
      count++
      queue = queue.concat(nextNeighbors);
      nextNeighbors = []
    }
  }
  return 'no path'
}

console.log(shortestPath(one, six))
console.log(shortestPath(two, three))
console.log(shortestPath(eight, four))
console.log(shortestPath(eight, six))
