
function isSolution(originalSet, subSet) {
  return subSet.length === originalSet.length
}

function processSolution(orignalSubSet, subSet, result) {
  const trueSolution = subSet.split('').map(ele => {
    return orignalSubSet[ele]
  })
  result.push(trueSolution)
}

function constructCandidates(originalSet, subSet) {
  const result = []
  const subSetArr = subSet.split('');
  const temp = originalSet.map(() => {
    return true
  })
  subSetArr.forEach(ele => {
    temp[ele] = false
  })
  temp.forEach((bool, idx) => {
    if (bool) {
      result.push(idx)
    }
  })
  return result
}

console.log(constructCandidates(['a', 'b', 'c', 'd'], '03'))

function makeMove(originalSet, subSet, result, data) {

}

function unMakeMove(originalSet, subSet, result, data) {

}

function permutation(originalSet, subSet = '', result = [], data) {
  if (isSolution(originalSet, subSet)) {
    processSolution(originalSet, subSet, result)
    return
  } else {
    const candidates = constructCandidates(originalSet, subSet, data)
    for (var i = 0; i < candidates.length; i++) {
      const newSubSet = subSet + candidates[i] // need to have a new one other wise the subset will keep updating in the for loop
      makeMove(originalSet, newSubSet, result, data)
      permutation(originalSet, newSubSet, result, data)
      unMakeMove(originalSet, newSubSet, result, data)
    }
  }
  return result
}

console.log(permutation(['a', 'b', 'c']))
