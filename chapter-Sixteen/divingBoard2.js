var assert = require('assert')

function divingBoard(totalWoods, long, short) {
  const diff = long - short
  const longest = long * totalWoods
  const result = []
  for (var i = 0; i <= totalWoods; i++) {
    result.push(longest - diff * i)
  }
  return result
}

assert.deepEqual(divingBoard(4, 4, 2), [16, 14, 12, 10, 8])
assert.deepEqual(divingBoard(3, 5, 3), [15, 13, 11, 9])
