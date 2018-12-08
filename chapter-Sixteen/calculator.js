function calculate(arr) {
  const addMinusArr = []
  for (var i = 0; i < arr.length; i++) {
    const currEle = arr[i]
    if (typeof currEle === 'number' || currEle === '+' || currEle === '-') {
      addMinusArr.push(currEle)
    } else {
      const prevNum = addMinusArr[addMinusArr.length - 1]
      const currNum = arr[i + 1]
      if (currEle === '*') {
        addMinusArr[addMinusArr.length - 1] = prevNum * currNum
      } else {
        addMinusArr[addMinusArr.length - 1] = prevNum / currNum
      }
      i += 1
    }
  }
  return findSum(addMinusArr)
}

function findSum(arr) {
  return arr.map((ele, idx) => {
    if (idx % 2 !== 0) return 0
    if (idx > 0 && arr[idx - 1] === '-') {
      return -1 * ele
    }
    return ele
  }).reduce((acc, num) => acc + num)
}

console.log(calculate([2, '*', 3, '+', 5, '/', 6, '*', 3, '+', 15]))

const priority = {
  '+': 1,
  '-': 1,
  '*': 2,
  '/': 2
}

function calculator(arr) {
  const numberStack = []
  const operatorStack = []
  arr.forEach(ele => {
    if (typeof ele === 'number') {
      numberStack.push(ele)
    } else if (operatorStack.length === 0) {
      operatorStack.push(ele)
    } else if (priority[ele] <= priority[operatorStack[operatorStack.length - 1]])  {
      const temp = collapse(numberStack, operatorStack)
      operatorStack.push(ele)
      numberStack.push(temp)
    } else {
      operatorStack.push(ele)
    }
  })
  while (operatorStack.length > 0) {
    numberStack.push(collapse(numberStack, operatorStack))
  }
  return numberStack[0]
}

function collapse(numStack, oprStack) {
  const num2 = numStack.pop()
  const num1 = numStack.pop()
  const operator = oprStack.pop()
  if (operator === '+') return num1 + num2
  if (operator === '-') return num1 - num2
  if (operator === '*') return num1 * num2
  if (operator === '/') return num1 / num2
}

console.log(calculator([2, '*', 3, '+', 5, '/', 6, '*', 3, '+', 15]))
