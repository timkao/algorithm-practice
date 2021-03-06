var decodeString = function(s) {
  const stack = []
  for (let i = 0; i < s.length; i++) {
      const currChar = s[i]
      if (isNumStr(currChar)) {
          if (isNumStr(stack[stack.length - 1])) {
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
        stack.push(temp.repeat(times))
      } else {
          stack.push(currChar)
      }
  }
  return stack.join('')
};

function isNumStr(char) {
  return !isNaN(Number(char))
}
