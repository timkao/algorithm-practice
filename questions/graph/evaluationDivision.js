var calcEquation = function(equations, values, queries) {
  const transMap = createTransmap(equations, values)
  //console.log(transMap)
  return queries.map(query => {
      return transition(transMap, query[0], query[1])
  })
};

function createTransmap(equas, values) {
  const result = {}
  equas.forEach((equa, idx) => {
      const top = equa[0]
      const bot = equa[1]
      if (result[top] === undefined) {
          result[top] = {}
      }
      if (result[bot] === undefined) {
          result[bot] = {}
      }
      result[top][bot] = values[idx]
      result[bot][top] = 1 / values[idx]
  })
  return result
}

function transition(map, from, to, visited = {}) {
  visited[from] = true
  if (map[from] === undefined) return -1
  if (map[from][to] !== undefined) {
      return map[from][to]
  }
  const routes = Object.keys(map[from])
  for (let i = 0; i < routes.length; i++) {
      const route = routes[i]
      if (visited[route] !== true) {
          const temp = transition(map, route, to, visited)
          if (temp !== -1) return map[from][route] * temp
      }
  }
  return -1
}
