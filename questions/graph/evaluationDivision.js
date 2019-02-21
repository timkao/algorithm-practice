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


var calcEquationBfs = function(equations, values, queries) {
  const transMap = createTransmap(equations, values)
  return queries.map(query => {
      return transition(transMap, query[0], query[1])
  })

  function transition(map, from, to, visited = {}, parent = {}) {
      if (map[from] === undefined || map[to] === undefined) return -1
      if (from === to) return 1
      visited[from] = true
      const queue = []
      queue.push(from)
      while(queue.length > 0) {
          const curEle = queue.shift()
          if (curEle === to) {
              return 1 / calculate(map, parent, from, to)
          }
          const children = Object.keys(map[curEle])
          for (let i = 0; i < children.length; i++) {
              const child = children[i]
              if (visited[child] !== true) {
                  visited[child] = true
                  parent[child] = curEle
                  queue.push(child)
              }
          }
      }
      return -1
  }

  function calculate(map, parent, start, end) {
      if (parent[end] === start) return map[end][start]
      return map[end][parent[end]] * calculate(map, parent, start, parent[end])
  }

};
