function powerSet(arr, aggr = '', result = [], idx = 0) {
  if (idx === arr.length) {
    result.push(aggr)
    return
  }
  const currEle = arr[idx];
  powerSet(arr, aggr + currEle, result, idx + 1)
  powerSet(arr, aggr, result, idx + 1)
  return result
}

console.log(powerSet(['a', 'b', 'c']))
