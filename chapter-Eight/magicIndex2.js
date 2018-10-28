var assert = require('assert');

function magicIndex(arr) {
  if (arr.length === 0)  return null
  return findMagicIndex(arr, 0, arr.length - 1)
}

function findMagicIndex(arr, start, end) {
  const checkPoint = Math.floor((end - start) / 2) + start
  if (arr[checkPoint] === checkPoint) return checkPoint
  if (start >= end) return null

  const leftResult = findMagicIndex(arr, start, checkPoint - 1)
  if (leftResult !== null) return leftResult

  const rightResult = findMagicIndex(arr, checkPoint + 1, end)
  if (rightResult !== null) return rightResult

  return null
}

const test1 = [0, 2, 4,  5, 7, 22, 23, 24]
const test2 = [0]
const test3 = [-3, -2, -1, 0, 1, 3, 4, 7]
const test4 = []
const test5 = [2, 4, 6, 8, 9, 10, 12, 13, 18]
const test6 = [-3, 1]
const test7 = [-3, -2, 0, 3, 5]
const test8 = [-3, 1, 5, 6, 8]
const test9 = [-3, -1, 1, 2, 3, 4, 6, 12, 22]
const test10 = [3, 3, 3, 3, 3]
const test11 = [1, 1, 1, 1, 1]

assert(magicIndex(test1) === 0)
assert(magicIndex(test2) === 0)
assert(magicIndex(test3) === 7)
assert(magicIndex(test4) === null)
assert(magicIndex(test5) === null)
assert(magicIndex(test6) === 1)
assert(magicIndex(test7) === 3)
assert(magicIndex(test8) === 1)
assert(magicIndex(test9) === 6)
assert(magicIndex(test10) === 3)
assert(magicIndex(test11) === 1)
