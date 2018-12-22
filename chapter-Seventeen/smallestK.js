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

assert.equal(smallestKUnique(ex, 0), null)
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

function selectionRankUnique(nums, target) {
  if (target <= 0 || target > nums.length) throw new Error('invalid inputs')
  const threshold = findThreshold(nums, target - 1)
  const smallest = []
  let count = 0
  for (var i = 0; i < nums.length; i++) {
    const currVal = nums[i]
    if (currVal <= threshold) {
      smallest[count] = currVal
      count += 1
    }
  }
  return smallest
}

function findThreshold(nums, rank) {
  return findRank(nums, 0, nums.length - 1, rank)
}

function findRank(nums, left, right, rank) {
  const pivot = nums[left + Math.floor((right - left) / 2)]
  const leftEnd = partition(nums, left, right, pivot)
  const leftSize = leftEnd - left + 1
  if (rank === leftSize - 1) {
    return findMax(nums, left, leftEnd)
  } else if (rank < leftSize) {
    return findRank(nums, left, leftEnd, rank)
  } else {
    return findRank(nums, leftEnd + 1, right, rank - leftSize)
  }
}

function partition(nums, left, right, pivot) {
  while (left <= right) {
    if (nums[left] > pivot) {
      swap(nums, left, right)
      right -= 1
    } else if (nums[right] <= pivot) {
      swap(nums, left, right)
      left += 1
    } else {
      right -= 1
      left += 1
    }
  }
  return left - 1
}

function swap(arr, left, right) {
  const temp = arr[left]
  arr[left] = arr[right]
  arr[right] = temp
}

function findMax(arr, left, right) {
  let result = Number.NEGATIVE_INFINITY
  for (var i = left; i <= right; i++) {
    if (arr[i] > result ) {
      result = arr[i]
    }
  }
  return result
}

console.log(selectionRankUnique(ex, 7))
