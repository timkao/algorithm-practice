var findItinerary = function(tickets) {
  const fromToMap = {}
  const route = []
  tickets.forEach((ticket) => { // { from: [to]}
      const from = ticket[0]
      const to = ticket[1]
      if (fromToMap[from] === undefined) {
          fromToMap[from] = [to]
      } else {
          fromToMap[from].push(to)
      }
  })
  Object.keys(fromToMap).forEach(stop => {
      fromToMap[stop].sort((a, b) => a.localeCompare(b))
  })
  const beginStop = 'JFK'
  return buildRoute(beginStop, fromToMap, route)
};

function buildRoute(curStop, candidatesMap, result) {
  const candidates = candidatesMap[curStop]
  while (candidates && candidates.length > 0) {
      const candidate = candidates.shift()
      buildRoute(candidate, candidatesMap, result)
  }
  result.unshift(curStop)
  return result
}
