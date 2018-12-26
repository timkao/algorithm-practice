const assert = require('assert')

const ex1 = [10, 8, 5, 7, 1, 3, 6, 9]
const ex2 = [10, 8, 5, 7, 1, 3, 6, 9, 12, 11]

function missingTwo(nums) {
  const sum = findSum(nums)
  const squareSum = findSquareSum(nums)
  const firstNum = findFirst(2, -2 * sum, sum * sum - squareSum)
  return [firstNum, sum - firstNum]
}

function findSum(nums) {
  const total = ((nums.length + 2 + 1) * (nums.length + 2)) / 2
  return nums.reduce((acc, num) => acc - num, total)
}

function findSquareSum(nums) {
  let originSum = 0;
  for (var i = 1; i <= nums.length + 2; i++) {
    originSum += i * i
  }
  return nums.reduce((acc, num) => acc - num * num, originSum)
}

function findFirst(a, b, c) {
  const num1 = (-b + Math.sqrt(b * b - 4 * a * c)) / (2 * a)
  const num2 = (-b - Math.sqrt(b * b - 4 * a * c)) / (2 * a)
  return num1 >= num2 ? num1 : num2
}

assert.equal(findSum(ex1), 6)
assert.equal(findSquareSum(ex1), 20)
assert.deepEqual(missingTwo(ex1), [4, 2])
assert.equal(findSum(ex2), 6)
assert.equal(findSquareSum(ex2), 20)
assert.deepEqual(missingTwo(ex2), [4, 2])
