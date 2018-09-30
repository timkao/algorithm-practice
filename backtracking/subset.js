
function isSolution(originalSet, subSet) {
  return subSet.length === originalSet.length
}

function conststructCandidate() {
  return [true, false]
}

function makeMove() {

}

function unMakeMove() {

}

function backtrackingSubSet(originalSet, subSet = [], start = 0, result = [], data) {

  if (isSolution(originalSet, subSet)) {
    result.push(subSet)
    return
  } else {
    const candidates = conststructCandidate()
    for (var i = 0; i < candidates.length; i++) {
      subSet[start] = candidates[i]
      makeMove(originalSet, subSet, start, result, data)
      backtrackingSubSet(originalSet, subSet.slice(), start + 1, result, data)
      unMakeMove(subSet, start, result, data)
    }
  }
  return result
}

console.log(backtrackingSubSet([1, 2, 3, 4]))

function dynamicSubSet(completeSet, subSet = '', result = []) {
  if (completeSet.length === 0) {
    result.push(subSet)
    return
  }
  const currEle = completeSet[completeSet.length - 1]
  const newCompleteSet = completeSet.slice(0, completeSet.length - 1);
  const newSubSet = subSet + currEle
  dynamicSubSet(newCompleteSet, newSubSet, result)
  dynamicSubSet(newCompleteSet, subSet, result)
  return result
}
console.log(dynamicSubSet([1, 2, 3, 4]))
