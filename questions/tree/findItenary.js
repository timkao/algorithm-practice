var findItinerary = function(tickets) {
  const fromToMap = {}
  tickets.forEach((ticket, idx) => { // { from: [[to, idx]] }
      const from = ticket[0]
      const to = ticket[1]
      if (fromToMap[from] === undefined) {
          fromToMap[from] = [[to, idx]]
      } else {
          fromToMap[from].push([to, idx])
      }
  })

  const routes = []
  const used = new Array(tickets.length).fill(false)
  const acc = []

  for (let i = 0; i < tickets.length; i++) {
      const curTicket = tickets[i]
      used[i] = true
      acc.push(curTicket[0])
      buildRoutes(tickets, curTicket[1], fromToMap, used, acc, routes)
      acc.pop()
      used[i] = false
  }
  routes.sort((a, b) => a - b)
  return routes[0].split('-')
};



function buildRoutes(allTickets, curStop, map, used, acc, result) {
  if (allUsed(used)) {
      acc.push(curStop)
      result.push(acc.join('-'))
      return
  }
  const candidates = buildCandidate(curStop, map, used)
  if (candidates.length === 0) return

  for (let i = 0; i < candidates.length; i++) {
      const curCandidate = candidates[i]
      const ticketNum = curCandidate[1]
      const nextStop = curCandidate[0]
      used[ticketNum] = true
      acc.push(allTickets[ticketNum][0])
      buildRoutes(allTickets, nextStop, map, used, acc, result)
      acc.pop()
      used[ticketNum] = false
  }
  return result
}

function allUsed(arr) {
  for (let i = 0; i < arr.length; i++) {
      if (arr[i] !== true) return false
  }
  return true
}

function buildCandidate(curStop, map, used) {
  const ticketArr = map[curStop]
  const result = []
  if (ticketArr === undefined) return result
  ticketArr.forEach(ticket => {
      if (used[ticket[1]] !== true) {
          result.push(ticket)
      }
  })
  return result
}
