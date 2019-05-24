var cloneGraph = function(node) {
  const nodeMap = new Map()
  return cloning(node, nodeMap)
};

function cloning(node, map) {
  if (map.has(node)) {
      return map.get(node)
  }
  const result = new Node(node.val, [])
  map.set(node, result)
  for (let i = 0; i < node.neighbors.length; i++) {
      const neighborNode = node.neighbors[i]
      result.neighbors.push(cloning(neighborNode, map))
  }
  return result
}
