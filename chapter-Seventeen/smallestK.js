var assert = require('assert')

const ex = [3, 8, 98, 73, 23, 55, 100, -9, 46, 0]

function smallestKUnique(nums, target) {
  if (target > nums.length || target === 0) return null
  const pivot = Math.floor(nums.length / 2)
  const pivotValue = nums[pivot]
  const left = []
  const  right = []
  nums.forEach(num => {
    if (num < pivotValue) {
      left.push(num)
    } else if (num > pivotValue) {
      right.push(num)
    }
  })
  if (left.length === target - 1) return pivotValue
  if (left.length > target - 1) return smallestKUnique(left, target)
  if (left.length < target - 1) return smallestKUnique(right, target - left.length - 1)
}

assert.equal(smallestKUnique(ex, 1), -9)
assert.equal(smallestKUnique(ex, 2), 0)
assert.equal(smallestKUnique(ex, 3), 3)
assert.equal(smallestKUnique(ex, 4), 8)
assert.equal(smallestKUnique(ex, 5), 23)
assert.equal(smallestKUnique(ex, 6), 46)
assert.equal(smallestKUnique(ex, 7), 55)
assert.equal(smallestKUnique(ex, 8), 73)
assert.equal(smallestKUnique(ex, 9), 98)
assert.equal(smallestKUnique(ex, 10), 100)
