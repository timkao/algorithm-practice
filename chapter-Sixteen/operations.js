/*
  interview question 16.9
*/
function recursiveMultiply(numA, numB) {
  const bigger = numA >= numB ? numA : numB;
  const smaller = numA < numB ? numA : numB;
  return multiplyHelper(bigger, smaller)
}
function multiplyHelper(big, small) {
  if (small === 0 || big === 0 ) { return 0}
  if (small === 1) { return big }
  const half = multiplyHelper(big, small >> 1);
  if (small % 2 === 1) { return half + half + big}
  else { return half + half}
}
console.log(recursiveMultiply(8, 10))

function addOnlyMultiply(numA, numB) {
  if (numA === 0  || numB === 0) { return 0}
  const _numA = Math.abs(numA);
  const _numB = Math.abs(numB);
  if ((numB > 0 && numB > 0) || (numA < 0) && (numB < 0) ) {
    let bigger = _numA >= _numB ? _numA : _numB;
    let smaller = _numA < _numB ? _numA : _numB;
    return multiply(bigger, smaller)
  } else {
    let positiveNum = numA > numB ? numA : numB
    let negativeNum = numA < numB ? numA : numB
    return multiply(negativeNum, positiveNum)
  }
}
function multiply(baseNum, iterateNum) {
  let result = 0;
  for (var i = 0; i < iterateNum; i++) {
    result += baseNum
  }
  return result
}
console.log(addOnlyMultiply(8, -10))
console.log(addOnlyMultiply(-8, 7))
console.log(addOnlyMultiply(9, 10))

function subtract(numA, numB) {
  if (numB < 0) { return numA + Math.abs(numB)}
  else {
    return numA + negate(numB)
  }
}
console.log(subtract(3, 5))
console.log(subtract(-3, 5))
console.log(subtract(-3, -5))

function divide(numA, numB) {
  if (numB === 1) { return numA}
  if (numB === 0) { return Infinity}
  if (Math.abs(numA) < Math.abs(numB)) { return 'invalid result'}
  let tempResult = divideHelper(Math.abs(numA), Math.abs(numB))
  if ((numA < 0 && numB < 0) || (numA > 0 && numB > 0) || tempResult === 'invalid result') {
    return tempResult
  } else {
    return negate(tempResult)
  }
}

function divideHelper(baseNum, iterateNum) {
  let result = 0
  let times = 1
  let tempIterate = iterateNum;
  while (baseNum > 0) {
    if (baseNum < tempIterate) { break }
    if (baseNum >= iterateNum) {
      baseNum = subtract(baseNum, iterateNum)
      result += times
      iterateNum = iterateNum + iterateNum
      times = times + times
    } else {
      iterateNum = tempIterate;
      times = 1;
    }
  }
  if (baseNum === 0) { return result}
  else { return 'invalid result'}
}


console.log(divide(10, 2))
console.log(divide(10, 3))
console.log(divide(-4, 3))
console.log(divide(-100, 4))

function negate(num) {
  // this can cover all numbers since sign could be 1, 2 or -1, -2
  const sign = num > 0 ? -1 : 1;
  let delta = sign;
  let result = 0;
  while (num !== 0) {
    if ( delta + num < 0) {
      delta = sign;
     }
     num += delta;
     result += delta
     delta = delta + delta
  }
  return result;
}

console.log(negate(-16))
