var numSquares = function(n) {
  const candidates = findSquares(n)
  if (candidates.includes(n)) return 1
  let queue = candidates.slice(0)
  let nextQueue = []
  const memo = {}

  let level = 2
  while (queue.length > 0) {
      const curNum = queue.shift()
      for (var i = 0; i < candidates.length; i++) {
          const newNum = curNum + candidates[i]
          if (memo[newNum] === undefined) {
              if (newNum === n) return level
              nextQueue.push(newNum)
              memo[newNum] = true
          }
      }
      if (queue.length === 0) {
          level += 1
          queue = nextQueue
          nextQueue = []
      }
  }

};

function findSquares(n) {
  const result = []
  let start = 1
  while (start * start <= n) {
      result.push(start * start)
      start += 1
  }
  return result
}
