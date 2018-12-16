var assert = require('assert')

const ex1 = [3, 1, 7, 1, 1, 7, 7, 3, 7, 7, 7]
const ex2 = [1, 2, 5, 9, 5, 9, 5, 5, 5]

function findMajorityElement(nums) {
  const candidate = getCandidate(nums)
  return validate(nums, candidate) ? candidate : -1
}

function getCandidate(arr) {
  let majority = 0
  let count = 0
  for (var i = 0; i < arr.length; i++) {
    const currNum = arr[i]
    if (count === 0) {
      majority = currNum
    } else if ( majority === currNum ) {
      count += 1
    } else {
      count -= 1
    }
  }
  return majority
}

function validate(arr, num) {
  let count = 0;
  for (var i = 0; i < arr.length; i++) {
    if (arr[i] === num ) {
      count += 1
    }
  }
  return count > Math.floor(arr.length / 2)
}

assert.equal(findMajorityElement(ex1), 7)
assert.equal(findMajorityElement(ex2), 5)
