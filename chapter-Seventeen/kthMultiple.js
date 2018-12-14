function kthMultiple(target, temp = [], arr = [1]) {
  if (arr.length === target) return arr[arr.length - 1]
  const latestNum = arr[arr.length - 1]
  if (!temp.includes(latestNum * 3)) {
    temp.push(latestNum * 3)
  }
  if (!temp.includes(latestNum * 5)) {
    temp.push(latestNum * 5)
  }
  if (!temp.includes(latestNum * 7)) {
    temp.push(latestNum * 7)
  }
  const nextNum = Math.min(...temp)
  arr.push(nextNum)
  const removeIdx = temp.findIndex(num => num === nextNum)
  temp.splice(removeIdx, 1)
  return kthMultiple(target, temp, arr)
}


console.log(kthMultiple(9))
