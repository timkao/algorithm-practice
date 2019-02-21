var canWin = function(s) {
  const arr = s.split('')
  return findWin(arr)
};

function findWin(arr, memo = {}) {
  const str = arr.join('')
  if (memo[str] !== undefined) return memo[str]
  for (let i = 0; i < arr.length - 1; i++) {
    const curSign = arr[i]
    const nextSign = arr[i + 1]
    if (curSign === '+' && nextSign === '+') {
        arr[i] = '-'
        arr[i + 1] = '-'
        const temp = !findWin(arr, memo)
        arr[i] = '+'
        arr[i + 1] = '+'
        if (temp) return true
    }
  }
  memo[str] = false
  return false
}
