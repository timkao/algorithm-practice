/**
 * @param {string} s
 * @return {string}
 */
var decodeString = function(s) {
  const stack = []
  for (let i = 0; i < s.length; i++) {
      const currChar = s[i]
      if (isNumStr(currChar)) {
          if (stack.length === 0) {
              stack.push(currChar)
          } else if (isNumStr(stack[stack.length - 1])) {
              stack[stack.length - 1] += currChar
          } else {
              stack.push(currChar)
          }
      } else if (currChar === ']') {
        let temp = ''
        while (stack[stack.length - 1] !== '[') {
            temp = stack.pop() + temp
        }
        stack.pop()
        let times = Number(stack.pop())
        while (times > 0) {
            stack.push(temp)
            times -= 1
        }
      } else {
          stack.push(currChar)
      }
  }
  return stack.join('')
};

function isNumStr(char) {
  return !isNaN(Number(char))
}
