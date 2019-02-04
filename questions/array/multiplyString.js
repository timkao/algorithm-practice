var multiply = function(num1, num2) {
  if (num1 === '0' || num2 === '0') return "0"
  const num1Arr = changeToNumber(num1)
  const num2Arr = changeToNumber(num2)
  if (num1Arr.length > num2Arr.length) return doMultiply(num1Arr, num2Arr)
  return doMultiply(num2Arr, num1Arr)
}

function doMultiply(longArr, shortArr) {
  const result = []
  for (let i = 0; i < longArr.length; i++) {
    for (let j = 0; j < shortArr.length; j++) {
      if (result[i + j] === undefined) {
        result[i + j] = longArr[i] * shortArr[j]
      } else {
        result[i + j] += longArr[i] * shortArr[j]
      }
    }
  }
  const itertimes = result.length
  for (let k = 0; k < itertimes; k++) {
    let extra = Math.floor(result[k] / 10)
    result[k] = result[k] % 10
    if (k + 1 < result.length) {
      result[k + 1] += extra
    } else if (extra > 0) {
      result[k + 1] = extra
    }
  }
  return result.reverse().join('')
}

function changeToNumber(numStr) {
  const inteMap = {
    0: 0,
    1: 1,
    2: 2,
    3: 3,
    4: 4,
    5: 5,
    6: 6,
    7: 7,
    8: 8,
    9: 9
  }
  let result = []
  for (let i = 0; i < numStr.length; i++) {
    const times = numStr.length - i - 1
    const currNumSrt = numStr[i]
    const currNum = inteMap[currNumSrt]
    result[times] = currNum
  }
  return result
}
