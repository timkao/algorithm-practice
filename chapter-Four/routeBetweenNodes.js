/*
  interview question 4.1
*/

function Graph(value){
  this.value = value;
  this.neighbors = [];
}

Graph.prototype.addNeighbor = function(node) {
  this.neighbors.push(node);
}

const One = new Graph(1);
const Two = new Graph(2);
const Three = new Graph(3);
const Four = new Graph(4);
const Five = new Graph(5);

One.addNeighbor(Two);
Two.addNeighbor(Three);
Two.addNeighbor(Five);
Three.addNeighbor(One);
Three.addNeighbor(Four);

function routeBetweenNodes(fromNode, toNode, path = []){

  if (fromNode === toNode) {
    return true;
  } else if (fromNode.neighbors.length === 0 || path.includes(fromNode)) {
    return false;
  }

  path.push(fromNode);

  let index = 0;
  while ( index < fromNode.neighbors.length) {
    const nextNode = fromNode.neighbors[index];
    if (routeBetweenNodes(nextNode, toNode, path)) {
      return true;
    }
    index++
  }
}

/*
  testing case
*/

console.log(routeBetweenNodes(Four, Five));
console.log(routeBetweenNodes(One, Five));

/*
  efficiency
  time: O(N)
  space: O(N)
*/
