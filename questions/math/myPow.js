function myPow(base, times, memo = []) {
  if (times === 0) return 1
  if (times === 1) return base
  if (base === 1) return 1
  if (memo[times] !== undefined) return memo[times]
  if (times > 0) {
     const left = base * myPow(base, Math.floor(times / 2) - 1, memo)
     const right = base * myPow(base, times - Math.floor(times / 2) - 1, memo)
     memo[times] = left * right
     return memo[times]
  } else {
     const left = (1/ base) * myPow(base, Math.ceil(times / 2) + 1, memo)
     const right = (1 / base) * myPow(base, times - Math.ceil(times / 2) + 1, memo)
     memo[times] = left * right
     return memo[times]
  }
}
