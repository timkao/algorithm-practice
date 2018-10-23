function permutationDup(arr, ans = '', result = [], candidatesArr) {
  if (candidatesArr === undefined) {
    candidatesArr = arr.slice(0);
  }
  if (isOneOfAns(ans, arr)) {
    result.push(ans)
    return
  } else {
    const candidates = constructCandidates(candidatesArr)
    for (var i = 0; i < candidates.length; i++) {
      const curr = candidates[i]
      if (notDuplicateCandidate(curr, i, candidates)) {
        const newAns = processCandidate(ans, curr)
        const newArr = candidatesArr.slice(0, i).concat(candidatesArr.slice(i + 1, candidatesArr.length))
        permutationDup(arr, newAns, result, newArr)
      }
    }
  }
  return result
}

function isOneOfAns(ans, arr) {
  return ans.length === arr.length
}

function constructCandidates(arr) {
  return arr
}

function processCandidate(ans, val) {
  return ans + val
}

function notDuplicateCandidate(currVal, idx, candidates) {
  // 重點是 Arr 要先排序！
  if (idx === 0) return true
  return currVal !== candidates[idx - 1]
}

console.log(permutationDup(['1', '1', '2', '2', '3']))
