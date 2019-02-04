/**
 * @param {string} s
 * @return {number}
 */
/* eslint-disable */
var calculate = function(s) {
  const operators = ['*', '+', '-', '/']
  const stack = []
  const tokens = generateTokens(s, operators)
  let result = 0
  for (let i = 0; i < tokens.length; i++) {
      const currTop = stack[stack.length - 1]
      const currToken = tokens[i]
      if (currTop !== '*' && currTop !== '/') {
          stack.push(currToken)
      } else if (currTop === '*') {
          stack.pop()
          stack.push(stack.pop() * currToken)
      } else if (currTop === '/') {
          stack.pop()
          stack.push(Math.floor(stack.pop() / currToken))
      }
  }
  if (stack.length > 0) {
      result += stack[0]
      for (let j = 2; j < stack.length; j++) {
          const sign = stack[j - 1]
          const num = stack[j]
          if (sign === '+') result += num
          if (sign === '-') result -= num
      }
  }
  return result
};
/* eslint-disable */


function generateTokens(s, operators) {
  let acc = ''
  const result = []
  for (let i = 0; i < s.length; i++) {
    const currChar = s[i]
    if (currChar !== ' ') {
      if (operators.includes(currChar)) {
        if (acc.length > 0) {
            result.push(Number(acc))
            acc = ''
        }
        result.push(currChar)
      } else {
        acc += currChar
      }
    }
  }
  if (acc.length > 0) result.push(Number(acc))
  return result
}
