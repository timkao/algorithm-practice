/**
 * @param {string} s
 * @return {number}
 */
var calculate = function(s) {
  const tokens = generateTokens(s)
  const operators = ['+', '-', '*', '/', '(']
  const stack = []
  for (let i = 0; i < tokens.length; i++) {
      const token = tokens[i]
      if (token === ')') {
          const subStack = []
          while (stack[stack.length - 1] !== '(') {
              subStack.push(stack.pop())
          }
          stack.pop()
          let subResult = calculateStack(subStack)
          if (stack[stack.length - 1] === '*') {
             stack.pop()
             subResult = stack.pop() * subResult
             stack.push(subResult)
          } else if (stack[stack.length - 1] === '/') {
             stack.pop()
             subResult = Math.floor(stack.pop() / subResult)
             stack.push(subResult)
          } else {
             stack.push(subResult)
          }
      }
      if (typeof token === 'number') {
          if (stack[stack.length - 1] === '*') {
             stack.pop()
             stack.push(stack.pop() * token)
          } else if (stack[stack.length - 1] === '/') {
             stack.pop()
             stack.push(Math.floor(stack.pop() / token))
          } else {
             stack.push(token)
          }
      }
      if (operators.includes(token)) {
          stack.push(token)
      }
  }
  const finalStack = []
  while (stack.length > 0) {
      finalStack.push(stack.pop())
  }
  return calculateStack(finalStack)
};

function calculateStack(stack) {
  let flag = 1
  let result = 0
  for (let i = stack.length - 1; i >= 0; i--) {
      if (stack[i] === '+') flag = 1
      if (stack[i] === '-') flag = -1
      if (typeof stack[i] === 'number') {
          result += stack[i] * flag
      }
  }
  return result
}

function generateTokens(str) {
  let numStr = ''
  const result = []
  const operators = ['+', '-', '*', '/', '(', ')']
  for (let i = 0; i < str.length; i++) {
      if (operators.includes(str[i])) {
        if (numStr.length > 0) {
            result.push(Number(numStr))
            numStr = ''
        }
        result.push(str[i])
      } else if (str[i] !== ' ') {
          numStr += str[i]
      }
  }
  if (numStr.length > 0) {
      result.push(Number(numStr))
  }
  return result
}

console.log(calculate("((   (   (6 * 9 )  / 5)   - (  (   9 +  5)  -(  4* 2 ))  )  /( (  (  4*6  ) +   (1+  2  ) ) - (  (   10  + 3 )+( 3+ 3 )  ))  )"))
