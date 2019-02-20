var numBusesToDestination = function(routes, S, T) {
    if (S === T) return 0
  const stationToBus = createStoB(routes)
  const busToStation = createBtoS(routes)
  const busToBus = createBtoB(routes, busToStation)
  const startingBuses = stationToBus[S]
  let result = Number.POSITIVE_INFINITY
  startingBuses.forEach(bus => {
    const minBuses = findMinBus(bus, busToBus, busToStation, T)
    result = Math.min(result, minBuses)
  })
  return result
};

/*
  bus to bus Map
  0: [bus2, bus4, bus6, bus9]
  2: [bus1, bus0, bus3]

  station to bus Map
  7: [bus0, bus1]

  assume start from station1

  go to station to bus map and find all buses
*/

function findMinBus(curBus, busToBus, busToStation, target) {
  const taken = []
  const parent = []
  let level = 1
  let queue = []
  let nextQueue = []

  queue.push(curBus)
  while (queue.length > 0) {
    const busNo = queue.pop()
    if (targetInRoute(busNo, busToStation, target)) {
      return level
    }
    taken[busNo] = true
    const childBuses = busToBus[busNo] ? busToBus[busNo] : []
    for (let i = 0; i < childBuses.length; i++) {
      const childBus = childBuses[i]
      if (taken[childBus] !== true) {
        nextQueue.push(childBus)
        parent[childBus] = busNo
      }
    }
    if (queue.length === 0) {
      level += 1
      queue = nextQueue
      nextQueue = []
    }
  }
  return -1
}


function targetInRoute(busNo, busToS, target) {
  return busToS[busNo][target] === true
}

function createBtoS(routes) {
  const result = {}
  routes.forEach((route, busNo) => {
     for (let i = 0; i < route.length; i++) {
       const station = route[i]
       if (result[busNo] === undefined) {
         result[busNo] = {}
       }
       result[busNo][station] = true
     }
  })
  return result
}

function createStoB(routes) {
  const result = {}
  routes.forEach((route, busNo) => {
    for (let i = 0; i < route.length; i++) {
      const station = route[i]
      if (result[station] === undefined) {
        result[station] = [busNo]
      } else {
        result[station].push(busNo)
      }
    }
  })
  return result
}

function createBtoB(routes, busToS) {
  const result = {}
  for (let i = 0; i < routes.length; i++) {
    const bus = routes[i]
    for (let j = i + 1; j < routes.length; j++) {
      if (hasOverlap(bus, busToS[j])) {
        if (result[i] === undefined) {
          result[i] = [j]
        } else {
          result[i].push(j)
        }
        if (result[j] === undefined) {
          result[j] = [i]
        } else {
          result[j].push(i)
        }
      }
    }
  }
  return result
}

function hasOverlap(arr1, map) {
  for (let i = 0; i < arr1.length; i++) {
    if (map[arr1[i]] === true) return true
  }
  return false
}
