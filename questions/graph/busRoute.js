/**
 * @param {number[][]} routes
 * @param {number} S
 * @param {number} T
 * @return {number}
 */
var numBusesToDestination = function(routes, S, T) {
  const busToStopMap = generateBToS(routes)
  const stopToBusMap = generateSToB(busToStopMap)
  const busGraph = generateGraph(stopToBusMap)
  let parent = []
  let discovered = []
  let result = Number.POSITIVE_INFINITY
  let targetBus = null
  for (let i = 0; i < stopToBusMap[S].length; i++) {
      const beginBus = stopToBusMap[S][i]
      if (bfs(busGraph, beginBus, T)) {
          const subResult = 1 + traceBack(parent, targetBus, beginBus)
          result = Math.min(result, subResult)
          parent = [] // revert to beginning state for next bfs
          targetBus = null // revert to beginning state for next bfs
          discovered = [] // revert to beginning state for next bfs
      }
  }
  return result

   function bfs(graph, start, target) {
      discovered[start] = true
      const queue = []
      queue.push(start)
      while (queue.length > 0) {
          const currVex = queue.shift()
          let child = graph.edges[currVex]
          while (child !== null) {
              const dest = child.vex
              if (!discovered[dest]) {
                  parent[dest] = currVex
                  discovered[dest] = true
                  if (hasTarget(busToStopMap, dest, target)) return true
                  queue.push(dest)
              }
              child = child.next
          }
      }
      return false
  }

};

function traceBack(arr, from, to) {
if (from === to) return 0
return 1 + traceBack(arr, arr[from], to)
}
