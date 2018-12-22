var assert = require('assert')

function kthMultiple(target, temp = {}, arr = [1]) {
  if (target === 0) return 0
  if (arr.length === target) return arr[arr.length - 1]
  const latestNum = arr[arr.length - 1]
  temp[latestNum * 3] = true
  temp[latestNum * 5] = true
  temp[latestNum * 7] = true
  const nextNum = Math.min(...Object.keys(temp).map(num => Number(num)))
  arr.push(nextNum)
  delete temp[nextNum]
  return kthMultiple(target, temp, arr)
}

assert.equal(kthMultiple(9), 27)
assert.equal(kthMultiple(12), 49)
