function carryTimes(num1, num2) {
  const arr1 = ('' + num1).split('').map(Number); // clean way to turn a number to an array of digits.
  const arr2 = ('' + num2).split('').map(Number);
  if (num1 >= num2) {
    return helper(arr1, arr2)
  } else {
    return helper(arr2, arr1)
  }
}

function helper(longNumArr, shortNumArr, carry = false) {
  if (longNumArr.length === 0 && shortNumArr.length === 0) {
    return 0
  }
  if (shortNumArr.length === 0 && !carry ) {
    return 0
  }
  const currLong = longNumArr.pop();
  if (shortNumArr.length === 0 && currLong !== 9 ) {
    return 0
  }
  if (shortNumArr.length === 0 && currLong === 9) {
    return 1 + helper(longNumArr, shortNumArr, true)
  }
  const currShort = shortNumArr.pop();
  let sum;
  if (carry) {
    sum = currLong + currShort + 1
  } else {
    sum = currLong + currShort
  }
  if (sum >= 10) {
    return 1 + helper(longNumArr, shortNumArr, true)
  } else {
    return helper(longNumArr, shortNumArr, false)
  }
}

console.log(helper([9, 9, 9, 9], [1]))
console.log(carryTimes(9999, 1))

console.log(helper([5, 5, 5, 5], [5, 5, 5]))
console.log(carryTimes(555, 5555))
