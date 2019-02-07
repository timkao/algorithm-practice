var mincostToHireWorkers = function(quality, wage, K, workerPt = 0, wageRate = 0, pickStatus = []) {
  if (K === 0) return 0
  if (quality.length - workerPt < K) return Number.POSITIVE_INFINITY
  pickStatus[workerPt] = true
  let pickThisWithNewRate = false
  let pickThisWithOldRate = false
  const updatedRate = updateWageRate(wageRate, quality, wage, workerPt, pickStatus)

  if (updatedRate === wageRate) {
      pickThisWithOldRate = calculateWage(quality, workerPt, wageRate) +
      mincostToHireWorkers(quality, wage, K - 1, workerPt + 1, wageRate, pickStatus)
  }
  if (updatedRate > wageRate) {
      pickThisWithNewRate = updatePrevWage(quality, workerPt, wageRate, updatedRate, pickStatus) +
      mincostToHireWorkers(quality, wage, K - 1, workerPt + 1, updatedRate, pickStatus)
  }

  if (updatedRate < wageRate) {
      if (isValid(updatedRate, quality, wage)) {
          pickThisWithNewRate = updatePrevWage(quality, workerPt, wageRate, updatedRate, pickStatus) +
          mincostToHireWorkers(quality, wage, K - 1, workerPt + 1, updatedRate, pickStatus)
      } else {
          pickThisWithOldRate = calculateWage(quality, workerPt, wageRate) +
          mincostToHireWorkers(quality, wage, K - 1, workerPt + 1, wageRate, pickStatus)
      }
  }

  pickStatus[workerPt] = false
  const notPickThis =  mincostToHireWorkers(quality, wage, K, workerPt + 1, wageRate, pickStatus)
  if (pickThisWithOldRate === false) return Math.min(pickThisWithNewRate, notPickThis)
  if (pickThisWithNewRate === false) return Math.min(pickThisWithOldRate, notPickThis)
};

function isValid(updatedRate, quality, wage) {
  for (let i = 0; i < quality.length; i++) {
      if (quality[i] * updatedRate < wage[i]) return false
  }
  return true
}

function updatePrevWage(quality, workerPt, wageRate, updatedRate, pickStatus) {
  let result = quality[workerPt] * updatedRate
  const diff = updatedRate - wageRate
  for (let i = 0; i < workerPt; i++) {
      if (pickStatus[i]) {
          result += diff * quality[i]
      }
  }
  return result
}


function updateWageRate(currRate, quality, wage, worker, pickStatus) {
  const newRate = wage[worker] / quality[worker]
  if (currRate === 0) return newRate
  if (currRate * quality[worker] >= wage[worker]) return currRate
  return newRate
}

function calculateWage(quality, worker, wageRate) {
  return wageRate * quality[worker]
}

console.log(mincostToHireWorkers([37,32,14,14,23,31,82,96,81,96,22,17,68,3,88,59,54,23,22,77,61,16,46,22,94,50,29,46,7,33,22,99,31,99,75,67,95,54,31,48,44,96,99,20,51,54,18,85,25,84],
  [453,236,199,359,107,45,150,433,32,192,433,94,113,200,293,31,48,27,15,32,295,97,199,427,90,215,390,412,475,131,122,398,479,142,103,243,86,309,498,210,173,363,449,135,353,397,105,165,165,62],
  20))
