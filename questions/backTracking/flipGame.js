function flipGame(str, count = 0, memo = [{}, {}]) {
  const turns = count % 2
  if (memo[turns][str] !== undefined) return memo[turns][str]
  const moves = generateMove(str)
  if (moves.length === 0) return turns === 0
  for (let i = 0; i < moves.length; i++) {
    const currMove = moves[i]
    const nextStr = modifiedStr(str, currMove)
    if (flipGame(nextStr, count + 1, memo)) {
      memo[turns][str] = true
      return true
    }
  }
  memo[turns][str] = false
  return false
}

function generateMoves(str) {
  const result = []
  for (let i = 0; i < str.length - 1; i++) {
    const neighbor = i + 1
    if (str[i] === '+' && str[neighbor] === '+') result.push(i)
  }
  return result
}

function modifiedStr(str, move) {
  let result = ''
  for (let i = 0; i < str.length; i++) {
    if ( i !== move && i !== move + 1){
      result += str[i]
    } else {
      result += '-'
    }
  }
  return result
}
