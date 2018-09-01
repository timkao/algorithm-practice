function carryTimes(num1, num2) {
  const str1 = num1.toString();
  const str2 = num2.toString();
  const arr1 = [];
  const arr2 = [];
  for (var i = 0; i < str1.length; i++) {
    arr1.push(Number(str1[i]))
  }
  for (var j = 0; j < str2.length; j++) {
    arr2.push(Number(str2[j]))
  }
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
