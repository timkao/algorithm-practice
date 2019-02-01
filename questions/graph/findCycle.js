/**
 * @param {number[][]} edges
 * @return {number[]}
 */
var findRedundantConnection = function(edges) {
  const graphMap = generateMap(edges)
  for (let i = 0; i < edges.length; i++) {
      const target = edges[i][0]
      const source = edges[i][1]
      const route = []
      const visited = []

      route.push(target)
      route.push(source)
      visited[source] = true
      const hasCycle = findCycle(graphMap, source, target, route, visited)
      if (hasCycle) return route
  }
  return null
};

function findCycle(graph, fromV, toV, route, visited) {
  if (fromV === toV)  return true
  const children = graph[fromV]
  for (let i = 0; i < children.length; i++) {
      const child = children[i]
      if (visited[child] !== true && child !== route[route.length - 2]) {
          route.push(child)
          visited[child] = true
          if (findCycle(graph, child, toV, route, visited)) return true
          route.pop(child)
          visited[child] = false
      }
  }
  return false
}

function generateMap(arrs) {
  const result = []
  arrs.forEach(edge => {
      if (result[edge[0]] === undefined) {
          result[edge[0]] = [edge[1]]
      } else {
          result[edge[0]].push(edge[1])
      }
      if (result[edge[1]] === undefined) {
          result[edge[1]] = [edge[0]]
      } else {
          result[edge[1]].push(edge[0])
      }
  })
  return result
}

console.log(findRedundantConnection([[1,2], [2,3], [3,4], [1,4], [1,5]]))
console.log(findRedundantConnection([[1,2], [2,3], [1,3]]))
console.log(findRedundantConnection([
  [1,2], [2,3], [3,4],
  [2, 5], [1, 6], [2, 6]
]))
console.log(findRedundantConnection([[1,4],[3,4],[1,3],[1,2],[4,5]]))
