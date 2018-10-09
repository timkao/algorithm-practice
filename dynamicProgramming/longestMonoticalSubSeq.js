const example = [2, 4, 3, 5, 1, 7, 6, 9, 8]

function byRecursionLength(arr, result = []) {
  if (arr.length <= 0) {
    return result.length
  }
  const currEle = arr[0]
  if (result[0] === undefined || currEle >= result[result.length - 1]) {
    return Math.max(byRecursionLength(arr.slice(1), result.concat([currEle])),byRecursionLength(arr.slice(1), result))
  } else {
    return byRecursionLength(arr.slice(1), result)
  }

}

console.log(byRecursionLength(example))

function byRecursionArr(arr, result = []) {
  if (arr.length <= 0) {
    return result
  }
  const currEle = arr[0]
  if (result[0] === undefined || currEle >= result[result.length - 1]) {
    const takeIt = byRecursionArr(arr.slice(1), result.concat([currEle]));
    const leftIt = byRecursionArr(arr.slice(1), result);

    if (takeIt.length <= leftIt.length) {
      return leftIt
    } else {
      return takeIt
    }

  } else {
    return byRecursionArr(arr.slice(1), result)
  }
}

console.log(byRecursionArr(example))

function byDynamicProgramming(arr) {
  const resultLength = arr.map(() => 1);
  const resultParent = []

  for ( var currIdx = 1; currIdx < arr.length; currIdx++) {
    for (var compIdx = 0; compIdx < currIdx; compIdx++) {
      const currVal = arr[currIdx]
      const compVal = arr[compIdx]
      if (compVal <= currVal && resultLength[compIdx] + 1 > resultLength[currIdx]) {
        resultLength[currIdx] = resultLength[compIdx] + 1
        resultParent[currIdx] = compIdx
      }
    }
  }
  const longest = Math.max(...resultLength)
  return constructPath(arr, resultParent, resultLength.indexOf(longest))
}

function constructPath(arr, parent, idx, result = []) {
  if (idx === undefined) {
    return result
  }
  result.unshift(arr[idx])
  return constructPath(arr, parent, parent[idx], result)
}

console.log(byDynamicProgramming(example))
