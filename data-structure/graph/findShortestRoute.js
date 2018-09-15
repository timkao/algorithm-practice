const { one, six } = require('./findShortestPath');

function findPath(graph, vertex) {
  if (vertex === graph) {
    return `${graph.value}`
  }
  return `${vertex.value} -> ` + findPath(graph, vertex.parent);
}

function findShortestPath(graph, vertex) {
  // construct parent-child relation
  const queue = []
  const discovered = []

  queue.push(graph)
  discovered.push(graph)
  let currVertex;

  while (queue.length > 0 && currVertex !== vertex) {
    currVertex = queue.shift();
    const neighbors = currVertex.neighbors;
    let neighborsIdx = 0
    while (neighborsIdx < neighbors.length) {
      const currNeighbor = neighbors[neighborsIdx];
      if (!discovered.includes(currNeighbor)) {
        queue.push(currNeighbor)
        /*
          key step, need to have "parent-child" relation to establish a route
        */
        currNeighbor.parent = currVertex; // whoever discovers it the first, named the parent of it
        if (currNeighbor === vertex) {
          currVertex = currNeighbor
          break
        }
      }
      neighborsIdx += 1
    }
  }
  return findPath(graph, currVertex)
}

console.log(findShortestPath(one, six))
