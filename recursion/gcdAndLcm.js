function gcd(bigNum, smallNum) {
  if (bigNum % smallNum === 0) return smallNum
  const rest = bigNum - smallNum
  if (rest > smallNum) return gcd(rest, smallNum)
  return gcd(smallNum, rest)
}

function lcm(bigNum, smallNum) {
  return bigNum * smallNum / gcd(bigNum, smallNum)
}

console.log(gcd(36, 24))
console.log(lcm(36, 24))
