var assert = require('assert')

function substract(a, b) {
  const newSign = b >= 0 ? -1 : 1
  while (b !== 0) {
    b += newSign
    a += newSign
  }
  return a
}

assert.equal(substract(5, 3), 2)
assert.equal(substract(5, -3), 8)
assert.equal(substract(-5, 3), -8)
assert.equal(substract(-5, -3), -2)


function multiply(a, b) {
  if (Math.abs(a) >= Math.abs(b)) {
    return doMultiply(a, b)
  }
  return doMultiply(b, a)
}

function doMultiply(bigNum, smallNum) {
  if (smallNum === 0 || bigNum === 0) return 0
  absBigNum = Math.abs(bigNum)
  absSmallNum = Math.abs(smallNum)
  const table = {}
  let count = 1
  table[1] = shouldBePositive(bigNum, smallNum) ? absBigNum : substract(0, absBigNum)
  while (count < absSmallNum) {
    let temp = table[count]
    if (absSmallNum < count + count) {
      return findMultiplyResult(absSmallNum, count, table, Object.keys(table))
    }
    count += count
    table[count] = temp + temp
  }
}

function shouldBePositive(num1, num2) {
  if ((num1 > 0 && num2 > 0) || (num1 < 0 && num2 < 2)) return true
  return false
}

function findMultiplyResult(smallNum, count, table, keys) {
  if (count === smallNum) return table[count]
  for (var i = 0; i < keys.length; i++) {
    const currKey = Number(keys[i])
    if (currKey + count === smallNum) return table[count] + table[currKey]
    if (currKey + count > smallNum) {
      const prevKey = Number(keys[i - 1])
      table[count + prevKey] = table[count] + table[prevKey]
      count += prevKey
      return findMultiplyResult(smallNum, count, table, keys)
    }
  }
}

console.log(multiply(-21, 40))
