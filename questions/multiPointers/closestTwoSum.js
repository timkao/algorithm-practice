/* eslint-disable */

function closestTwoSum(targetDist, routesA, routesB) {
  routesA.sort((a, b) => a[1] - b[1])
  routesB.sort((a, b) => a[1] - b[1])
  let lo = 0
  let hi = routesB.length - 1
  let diff = Number.POSITIVE_INFINITY
  let idens = []
  while (lo < routesA.length && hi >= 0) {
    const currDiff = targetDist - routesA[lo][1] - routesB[hi][1]
    const currPair = [routesA[lo][0], routesB[hi][0]]
    if (currDiff >= 0 && currDiff < diff) {
      diff = currDiff
      idens = [currPair]
    } else if (currDiff >= 0 && currDiff === diff) {
      idens.push(currPair)
    }
    if (currDiff < 0) {
      hi -= 1
    } else {
      lo += 1
    }
  }
  return idens
}

const example1 = {
  target: 7000,
  forward: [
    [1, 2000],
    [2, 4000],
    [3, 6000]
  ],
  backward: [
    [1, 2000]
  ],
}

const example2 = {
  target: 10000,
  forward: [
    [1, 3000],
    [2, 5000],
    [3, 7000],
    [4, 10000]
  ],
  backward: [
    [1, 2000],
    [2, 3000],
    [3, 4000],
    [4, 5000]
  ],
}

console.log(closestTwoSum(example1.target, example1.forward, example1.backward))
console.log(closestTwoSum(example2.target, example2.forward, example2.backward))
