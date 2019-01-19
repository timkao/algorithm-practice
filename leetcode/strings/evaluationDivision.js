/**
 * @param {string[][]} equations
 * @param {number[]} values
 * @param {string[][]} queries
 * @return {number[]}
 */
var calcEquation = function(equations, values, queries) {
  const variableMap = {}
  generateMap(equations, values, variableMap)
  return queries.map(equa => calculate(equa, variableMap))
};

function generateMap(equations, values, map) {
  equations.forEach((equa, idx) => {
      const top = equa[0]
      const bot = equa[1]
      if (map[top] === undefined) {
          map[top] = {}
      }
      map[top][bot] = [values[idx], 1]
      if (map[bot] === undefined) {
          map[bot] = {}
      }
      map[bot][top] = [1, values[idx]]
  })
}

function calculate(equation, map) {
  const top = equation[0]
  const bot = equation[1]
  if (map[top] === undefined || map[bot] === undefined) return -1.0
  return generateResult(top, bot, map, 1.0)
}

function generateResult(v1, v2, equaMap, fac, visited = {}) {
  visited[v1] = true
  const children = Object.keys(equaMap[v1])
  for (var i = 0; i < children.length; i++) {
      const child = children[i]
      const childFac = equaMap[v1][child][0] / equaMap[v1][child][1]
      if (child === v2) {
          return fac * childFac
      }
      if (child !== v2 && visited[child] !== true) {
          const temp = generateResult(child, v2, equaMap, fac * childFac, visited)
          if (temp !== -1.0) return temp
      }
  }
  return -1.0
}
