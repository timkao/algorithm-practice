const { Vertex } = require('./findShortestPath');

const grape = new Vertex(1)
const apple = new Vertex(2)
const berry = new Vertex(3)
const dog = new Vertex(7)
const car = new Vertex(4)
const elephant = new Vertex(6)
const fox = new Vertex(5)

grape.neighbors.push(apple)
grape.neighbors.push(fox)
apple.neighbors.push(berry)
apple.neighbors.push(car)
berry.neighbors.push(car)
berry.neighbors.push(dog)
car.neighbors.push(elephant)
car.neighbors.push(fox)
fox.neighbors.push(elephant)
elephant.neighbors.push(dog)

const vertices = [grape, apple, berry, dog, car, elephant, fox]

const processed = []
const discovered = []
const entryTime = []
const exitTime = []
const parent = []
const stack = [];
let time = 0

function processVertexEarly(vertex) {
  console.log('-------- start processing --------')
  console.log(`This is ${vertex.value}`);
  console.log('-------- start processing --------\n')
}

function processEdge(vertex, neighbor) {
  console.log('----- Do whatever we want to vertex and the neighbor ------')
  console.log(`The vertex is ${vertex.value}`)
  console.log(`The neighbor is ${neighbor.value}`)
  const edgeType = edgeClassification(vertex.value, neighbor.value)
  console.log(`current edge is ${edgeType}`);
  if (edgeType === 'BACK') {
    console.log('This graph is not DAG')
  }
  console.log('----- Do whatever we want to vertex and the neighbor ------\n')
}

function processVertexLate(vertex) {
  console.log('----- Post Processed ------')
  console.log(`${vertex.value} is processed`)
  stack.push(vertex)
  console.log('----- Post Processed ------\n')
}

function edgeClassification(from, to) {
  if (parent[from] === to) return 'TREE'
  if (discovered[to] && !processed[to]) return 'BACK'
  if (processed[to] && entryTime[to] > entryTime[from]) return 'FORWARD'
  if (processed[to] && entryTime[to] < entryTime[from]) return 'CROSS'
}

// 越先發現，越晚做完
function dfs(graph) {

  processVertexEarly(graph)
  time += 1 // take a record before recursion
  entryTime[graph.value] = time;
  discovered[graph.value] = true // marked as discovered

  // process children (neighbors)
  let neighborsIdx = 0;
  while (neighborsIdx < graph.neighbors.length) {
    const currNeighbor = graph.neighbors[neighborsIdx];

    if (!discovered[currNeighbor.value]) {
      parent[currNeighbor.value] = graph.value
      processEdge(graph, currNeighbor)
      dfs(currNeighbor)
    } else if (!processed[currNeighbor.value]) {
      processEdge(graph, currNeighbor)
    }
    neighborsIdx += 1
  }

  processVertexLate(graph)
  time += 1 // 目前感覺是可有可無，是否是因為 javaScript 的關係？
  exitTime[graph.value] = time
  processed[graph.vlaue] = true // marked as processed

}

function topologicalSort() {

  for (var i = 0; i < vertices.length; i++) {
    if (discovered[i + 1] === undefined) {
      dfs(vertices[i])
    }
  }

  while (stack.length > 0) {
    console.log(stack.pop())
  }
}

topologicalSort()
