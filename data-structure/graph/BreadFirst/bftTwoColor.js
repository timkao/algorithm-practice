const { one } = require('./findShortestPath');

function processVertexEarly(vertex) {
  console.log('-------- start processing --------')
  setColor(vertex);
  console.log(`This is ${vertex.value} and it is ${vertex.color}`);
  console.log('-------- start processing --------\n')
}

function processEdge(vertex, neighbor) {
  console.log('----- Do whatever we want to vertex and the neighbor ------')
  console.log(`The vertex is ${vertex.value}`)
  console.log(`The neighbor is ${neighbor.value}`)
  console.log('----- Do whatever we want to vertex and the neighbor ------\n')
}

function processVertexLate(vertex) {
  console.log('----- Post Processed ------')
  console.log(`${vertex.value} is processed`)
  console.log('----- Post Processed ------\n')
}

function setColor(vertex) {
  if (!vertex.color) {
    vertex.color = vertex.parent.color === 'red' ? 'white' : 'red';
  }
}

function bftTwoColor(graph) {
  const queue = []
  const discovered = [] // 若是每個 vertex 都有自己的整數編號，會更快
  const processed = [] // 若是每個 vertex 都有自己的整數編號，會更快
  const parent = [] // 若是每個 vertex 都有自己的整數編號，會更快

  let currVertex;
  let currNeighbor

  graph.color = 'red';
  discovered.push(graph) // 發現之後把他送入 queue 中等待
  queue.push(graph)

  while (queue.length > 0) {
    currVertex = queue.shift()
    processVertexEarly(currVertex)
    processed.push(currVertex)

    const neighbors = currVertex.neighbors
    let neighborIdx = 0
    while (neighborIdx < neighbors.length) {
      currNeighbor = neighbors[neighborIdx];
      if (!processed.includes(currNeighbor)) { // 是否已經與鄰居互動過
        processEdge(currVertex, currNeighbor)
      }
      if (!discovered.includes(currNeighbor)) {
        queue.push(currNeighbor)
        discovered.push(currNeighbor)
        currNeighbor.parent = currVertex
        parent[currNeighbor.value] = currVertex.value; // record the paths through integer index
      }
      neighborIdx += 1;
    }
    processVertexLate(currVertex)
  }
}

bftTwoColor(one)
