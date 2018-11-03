function Graph() {
  this.edges = []; // edges of each node (list of linkedlist)
  this.outDegree = []; // outdegree of each vertex
  this.nVertices = 0; // number of vertices
  this.nEdges = 0; // number of edges
  this.directed = false // directed or undirected
}

function EdgeNode(idx, weight) {
  this.idx = idx
  this.weight = weight
  this.next = null
}

module.exports = {
  Graph,
  EdgeNode
}
