// work but very slow....
function stringCompare(startStr, toStr, startLeng, toLeng) {
  if (startLeng === undefined) startLeng = startStr.length
  if (toLeng === undefined) toLeng = toStr.length

  if (startLeng === 0) return toLeng * indel()
  if (toLeng === 0) return startLeng * indel()

  const costs = []
  // match
  costs[0] = stringCompare(startStr, toStr, startLeng - 1, toLeng - 1) + match(startStr[startLeng - 1], toStr[toLeng - 1])

  // insert
  costs[1] = stringCompare(startStr, toStr, startLeng, toLeng - 1) + indel(toStr[toLeng - 1])

  // delete
  costs[2] = stringCompare(startStr, toStr, startLeng - 1, toLeng) + indel(startStr[startLeng - 1])

  return Math.min(...costs);
}

function match(c1, c2) {
  if (c1 === c2) return 0
  return 1
}

function indel(chr) {
  return 1
}

console.log(stringCompare('thou shal', 'you shou'));
