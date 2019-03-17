var canCompleteCircuit = function(gas, cost) {
  const candidates = []
  const diffs = []
  for (let i = 0; i < gas.length; i++) {
      const diff = gas[i] - cost[i]
      if (diff >= 0) {
          candidates.push([diff, i])
      }
      diffs.push(diff)
  }
  candidates.sort((a, b) => b[0] - a[0])
  for (let j = 0; j < candidates.length; j++) {
      const beginIdx = candidates[j][1]
      if (isValid(diffs, beginIdx)) {
          return beginIdx
      }
  }
  return -1
};

function isValid(arr, beginIdx) {
  let sum = 0
  for (let i = beginIdx; i <= arr.length + beginIdx; i++) {
      const idx = i % arr.length
      sum += arr[idx]
      if (sum < 0) return false
  }
  return true
}

var canCompleteCircuitOpt = function(gas, cost) {
  let totalTank = 0
  let curTank = 0
  let startPt = 0
  for (let i = 0; i < gas.length; i++) {
      const diff = gas[i] - cost[i]
      totalTank += diff
      curTank += diff
      if (curTank < 0) {
          startPt = i + 1
          curTank = 0
      }
  }
  if (totalTank < 0) return -1
  return startPt
};

