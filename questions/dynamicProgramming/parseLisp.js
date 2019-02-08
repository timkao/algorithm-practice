/* eslint-disable */
var evaluate = function(expression) {
  const tokens = generateTokens(expression, start = 1, end = expression.length - 2)
  return parseTokens(tokens)

  function parseTokens(tokenArr, scope = {}) {

    let mode = null
    let start = 0
    while (start < tokenArr.length) {
      let currToken = tokenArr[start]
      if (currToken === 'let') {
        mode = 'var'
        start += 1
        continue
      }
      if (currToken === 'add') {
        mode = 'plus'
        start += 1
        continue
      }
      if (currToken === 'mult') {
        mode = 'time'
        start += 1
        continue
      }
      if (Array.isArray(currToken)) {
        currToken = parseTokens(currToken, {...scope})
      }
      let nextToken = tokenArr[start + 1]
      if (Array.isArray(nextToken)) {
        nextToken = parseTokens(nextToken, {...scope})
      }
      if (mode === 'plus' || mode === 'time') {
        if (typeof currToken !== 'number') {
          currToken = scope[currToken]
        }
        if (nextToken !== undefined && typeof nextToken !== 'number') {
          nextToken = scope[nextToken]
        }
        if (mode === 'plus') return currToken + nextToken
        if (mode === 'time') return currToken * nextToken
      }
      if (mode === 'var' && nextToken !== undefined) {
        if (typeof nextToken === 'string') {
          scope[currToken] = scope[nextToken]
        } else {
          scope[currToken] = nextToken
        }
        start += 1
      }
      if (mode === 'var' && nextToken === undefined) {
        if (typeof currToken === 'string') return scope[currToken]
        return currToken
      }
      start += 1
    }
  }

  function generateTokens(expr, start, end) {
      const heads = []
      let tokenAcc = ''
      while (start <= end) {
          const currChar = expr[start]
          if (currChar !== ' ' && currChar !== '(') {
              tokenAcc += currChar
          } else {
              if (tokenAcc.length > 0) {
                  if (!isNaN(tokenAcc)) {
                      heads.push(Number(tokenAcc))
                  } else {
                      heads.push(tokenAcc)
                  }
                  tokenAcc = ''
              }
          }

        if ( (currChar === '(') && tokenAcc.length > 0) {
          if (!isNaN(tokenAcc)) {
              heads.push(Number(tokenAcc))
          } else {
              heads.push(tokenAcc)
          }
          tokenAcc = ''
        }
        if (currChar === '(') {
          const pairLeft = findResponseLeft(expr, start, end)
          heads.push(generateTokens(expr, start + 1, pairLeft - 1))
          start = pairLeft
        }
        if (start === end && tokenAcc.length > 0) {
          if (!isNaN(tokenAcc)) {
              heads.push(Number(tokenAcc))
          } else {
              heads.push(tokenAcc)
          }
          tokenAcc = ''
        }
        start += 1
      }
      return heads
  }

  function findResponseLeft(str, start, end) {
    let rightP = 0
    let leftP = 0
    for (let i = start; i <= end; i++) {
      if (str[i] === '(') rightP += 1
      if (str[i] === ')') leftP += 1
      if (rightP === leftP) return i
    }
  }
};

console.log(evaluate("(let x -2 y x y)"))
console.log(evaluate('(let x 1 y 2 x (add x y) (add x y))'))
console.log(evaluate('(let x 2 (add (let x 3 (let x 4 x)) x))'))
